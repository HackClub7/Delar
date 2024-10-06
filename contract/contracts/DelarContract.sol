// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

import "./libs/Errors.sol";

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract DelarContract {
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

        lands[msg.sender].push(newLand);

        uint landIndex = lands[msg.sender].length - 1;

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

        if(!userLand.forSale) {
            revert Errors.LandIsAlreadyForSale();
        }

        if(_landPortion > userLand.plotsforSale) {
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

    function buyLand() external {
        // 1. validate that land exists and is up for sale
        // 2. validate buyer has sufficient Tokens
        // 3. update state
        //      a). if all plots are sold,
        //           - transfer ownership by updating new owner address
        //           - set forSale to false
        //           - transfer NFt to new owner
        //      b). if a portion of plots are sold,
        //           - deduct owner numberOfPlots
        //           - set plotsForSale to 0
        //           - set forSale to false
        //           - mint new NFt to new owner
        // 4. update Land History
        // 5. Transfer Tokens from buyer to seller
    }

    function calculateLandNetWorth() external {
        // 1. determine land networth and update land
        // 2. mint NFt for valued land
    }

    function userRequestNetWorthValueAppreciation() external {
        // 1. when environmental changes and enhancements occurs,
        // 2. user should request so that team can valuate and appreciate propety value
    }


    // getter functions

    function viewAllListings() external view returns(LandSale[] memory) {
        return landsForSale;
    }

    function veiwOwnerLands(address _landOwner) external view returns(Land[] memory) {
        return lands[_landOwner];
    }
    


}
