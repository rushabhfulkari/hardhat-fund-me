const { network } = require("hardhat")
const { deploymentChains } = require("../helper-hardhat-config.js")
require("dotenv").config()

const DECIMALS = "8"
const INITIAL_PRICE = "200000000000"

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()

    log("-------------------------------------")
    log(deployer)
    log("-------------------------------------")

    if (deploymentChains.includes(network.name)) {
        log("Local Network Detected!! Deploying Mocks!")
        await deploy("MockV3Aggregator", {
            contract: "MockV3Aggregator",
            from: deployer,
            log: true,
            args: [DECIMALS, INITIAL_PRICE],
        })

        log("Mocks Deployed")
        log("------------------------------------------")
    }
}

module.exports.tags = ["all", "mocks"]
