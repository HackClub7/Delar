// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

library Errors {
    error InvalidNumberOfPlots();

    error InvalidLandLocation();

    error InvalidTitleNumber();

    error TitleExistAlready();

    error LandIsVerifiedAlready();

    error InvalidLandIndex();

    error LandIsNotVerified();

    error LandIsAlreadyForSale();

    error NotTheOwner();

    error LandIsNotValuedYet();
}
