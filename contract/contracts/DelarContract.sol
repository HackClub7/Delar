// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

import "./libs/Errors.sol";
import "./interface/IERC20.sol";

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract DelarContract {
    address tokenAddress;
    address owner;
    uint plotBasePrice = 100;

    enum ElectricityIndex { Excellent, Average, Fair }
    enum WaterIndex { Excellent, Average, Fair }
    enum ProximityToTarredRoad { Close, Average, Far }
    enum LocationIndex { Urban, Suburban, Rural }

    mapping(uint => bool) public registeredTitles;

    struct Land {
        uint numberOfPlots;
        string landLocation;
        uint titleNumber;
        uint netWorth;
        uint plotsforSale;
        bool isVerified;
        bool forSale;
    }

    mapping(address => Land[]) lands;

    // struct for available listings
    struct LandSale {
        address owner;
        uint landIndex;
    }

    LandSale[] public landsForSale;

    struct LandHistory {
        address soldFrom;
        address soldTo;
        uint amount;
        uint numberofPlots;
        uint date;
    }

    //todo: work logic to map land historical data to land index & update in code
    mapping (uint => LandHistory[]) public landHistoricalData;

    event LandRegistered(address _landOwner, uint indexed _landIndex, string indexed _landLocation);
    event LandListedForSale(address _landOwner, uint indexed _landIndex, uint indexed _price, uint indexed plotsForSell);
    event LandDelistedForSale(address _landOwner, uint indexed _landIndex);
    event LandVerified(address indexed _landOwner, uint indexed _landIndex);

    constructor(address _tokenAddress) {
        owner = msg.sender;
        tokenAddress = _tokenAddress;
    }


    // setter functions
    function registerLand(
        uint _numberOfPlots,
        string memory _landLocation,
        uint _titleNumber
    ) external {
        if(_numberOfPlots == 0 ) {
            revert Errors.InvalidNumberOfPlots();
        }

        if(_titleNumber == 0) {
            revert Errors.InvalidTitleNumber();
        }

        // check for empty string
        if (bytes(_landLocation).length == 0) {
            revert Errors.InvalidLandLocation();
        }

        if(registeredTitles[_titleNumber]) {
            revert Errors.TitleExistAlready();
        }

        registeredTitles[_titleNumber] = true;

         
        Land memory newLand = Land({
            numberOfPlots: _numberOfPlots,
            landLocation: _landLocation,
            titleNumber: _titleNumber,
            netWorth: 0,
            plotsforSale: 0,
            forSale: false,
            isVerified: false
        });

        LandHistory memory landHistory = LandHistory({
            soldFrom: msg.sender,
            soldTo: msg.sender,
            amount: 0,
            numberofPlots: _numberOfPlots,
            date: block.timestamp
        });

        lands[msg.sender].push(newLand);

        uint landIndex = lands[msg.sender].length - 1;

        landHistoricalData[landIndex].push(landHistory);

        emit LandRegistered(msg.sender, landIndex, _landLocation);
    }

    function verifyLand(address _landOwner, uint _landIndex) external {
        
        if(_landIndex > lands[_landOwner].length) {
            revert Errors.InvalidLandIndex();
        }

        if(lands[_landOwner][_landIndex].isVerified) {
            revert Errors.LandIsVerifiedAlready();
        }

        if(lands[_landOwner][_landIndex].netWorth == 0) {
            revert Errors.LandIsNotValuedYet();
        }

        lands[_landOwner][_landIndex].isVerified = true;

        emit LandVerified(_landOwner, _landIndex);
    }

    function listLand(uint _landIndex, uint _landPortion) external {

        if(_landIndex > lands[msg.sender].length) {
            revert Errors.InvalidLandIndex();
        }

        Land storage userLand = lands[msg.sender][_landIndex];

        if(!userLand.isVerified) {
            revert Errors.LandIsNotVerified();
        }

        if(userLand.forSale) {
            revert Errors.LandIsAlreadyForSale();
        }

        if(_landPortion > userLand.numberOfPlots) {
            revert Errors.InvalidNumberOfPlots();
        }

        userLand.forSale = true;
        userLand.plotsforSale = _landPortion;

        landsForSale.push(LandSale({
            owner: msg.sender,
            landIndex: _landIndex
        }));

        // todo: networth
        emit LandListedForSale(msg.sender, _landIndex, userLand.netWorth, _landPortion);
    }

    function removeLandFromListing(uint _saleIndex) external {
        if(_saleIndex > landsForSale.length) {
            revert Errors.InvalidLandIndex();
        }

        if(landsForSale[_saleIndex].owner != msg.sender) {
            revert Errors.NotTheOwner();
        }

        uint landIndex = landsForSale[_saleIndex].landIndex;
        
        lands[msg.sender][landIndex].forSale = false;
        lands[msg.sender][landIndex].plotsforSale = 0;

        //todo: test to ensure it doesnt affect other owners index
        landsForSale[_saleIndex] = landsForSale[landsForSale.length - 1];

        landsForSale.pop();

        emit LandDelistedForSale(msg.sender, landIndex);
    }

    function buyLand(uint _saleIndex, address _landOwner, uint _numberOfPlotsToBuy) external {
        // 1. validate that land exists and is up for sale
        if(_saleIndex > landsForSale.length) {
            revert Errors.InvalidLandIndex();
        }


        uint _landIndex = landsForSale[_saleIndex].landIndex;

        Land storage sellerLand = lands[_landOwner][_landIndex];

        if(_numberOfPlotsToBuy > sellerLand.plotsforSale) {
            revert Errors.InvalidNumberOfPlots();
        }

        // 2. validate buyer has sufficient Tokens
        //ERC20 will handle that


        // 3. update state
        //      a). if all plots are sold,
        //           - transfer ownership by updating new owner address
        //           - set forSale to false

        sellerLand.numberOfPlots -= _numberOfPlotsToBuy;
        sellerLand.plotsforSale -= _numberOfPlotsToBuy;

        if (sellerLand.plotsforSale == 0){
            sellerLand.forSale = false;

            landsForSale[_saleIndex] = landsForSale[landsForSale.length - 1];

            landsForSale.pop();
        }

        uint _amountSold = sellerLand.netWorth * _numberOfPlotsToBuy;

        // 4. update Land History
        LandHistory memory _landHistory = LandHistory({
            soldFrom: _landOwner,
            soldTo: msg.sender,
            amount: _amountSold,
            numberofPlots: _numberOfPlotsToBuy,
            date: block.timestamp
        });

        landHistoricalData[_landIndex].push(_landHistory);

        // 5. Transfer Tokens from buyer to seller
        IERC20(tokenAddress).transferFrom(msg.sender, _landOwner, _amountSold);
        
        //           - transfer NFt to new owner
        //           - mint new NFt to new owner
    }

    function calculateLandNetWorth(
        address _landOwner,
        uint _landIndex, 
        ElectricityIndex _electricityIndex, 
        WaterIndex _waterIndex, 
        ProximityToTarredRoad _proximityIndex,
        LocationIndex _locationIndex) external {

        // 1. determine land networth and update land

        uint _totalPoints = this.getTotalPoints(_electricityIndex, _waterIndex, _proximityIndex, _locationIndex);
        uint _landValue = plotBasePrice * _totalPoints;

        lands[_landOwner][_landIndex].netWorth = _landValue;

        // 2.deduct tokens & mint NFt for valued land
    }

    function userRequestNetWorthValueAppreciation() external {
        // 1. when environmental changes and enhancements occurs,
        // 2. user should request so that team can valuate and appreciate propety value
    }


    // getter functions

    function viewAllListings() external view returns(LandSale[] memory) {
        return landsForSale;
    }

    function veiwOwnerLands() external view returns(Land[] memory) {
        return lands[msg.sender];
    }
    
    function getTotalPoints(
        ElectricityIndex _electricityIndex, 
        WaterIndex _waterIndex, 
        ProximityToTarredRoad _proximityIndex,
        LocationIndex _locationIndex
        ) external pure returns(uint) {
        
        uint256 totalPoints = 0;

        // calculate electricity index
        if (_electricityIndex == ElectricityIndex.Excellent) {
            totalPoints += 2;
        } 
        if (_electricityIndex == ElectricityIndex.Average) {
            totalPoints += 1;
        } 
        if (_electricityIndex == ElectricityIndex.Fair){
            totalPoints += 0;
        }

        // calculate water index
        if (_waterIndex == WaterIndex.Excellent) {
            totalPoints += 2;
        } 
        if (_waterIndex == WaterIndex.Average) {
            totalPoints += 1;
        } 
        if (_waterIndex == WaterIndex.Fair){
            totalPoints += 0;
        }

        // calculate proximity index
        if (_proximityIndex == ProximityToTarredRoad.Close) {
            totalPoints += 2;
        } 
        if (_proximityIndex == ProximityToTarredRoad.Average) {
            totalPoints += 1;
        } 
        if (_proximityIndex == ProximityToTarredRoad.Far) {
            totalPoints += 0;
        }

        // calculate location index
        if (_locationIndex == LocationIndex.Urban) {
            totalPoints += 2;
        } 
        if (_locationIndex == LocationIndex.Suburban) {
            totalPoints += 1;
        } 
        if (_locationIndex == LocationIndex.Rural) {
            totalPoints += 0;
        }

        return totalPoints;
    }

}
