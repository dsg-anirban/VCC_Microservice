# VCC_Microservice
# name - Anirban Dasgupta
# roll - m23aid001

T# Microservices on VirtualBox

This repository demonstrates how to deploy a microservices-based application across multiple VirtualBox virtual machines (VMs). The guide includes VM creation, network configuration, deploying a Node.js microservice, and using GitHub to manage your code.

## Table of Contents
- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [VM Creation and Configuration](#vm-creation-and-configuration)
- [Shared Network Setup](#shared-network-setup)
- [Deploying the Microservice Application](#deploying-the-microservice-application)
- [Testing](#testing)
- [GitHub Repository Setup](#github-repository-setup)
- [Architecture Diagram](#architecture-diagram)
- [License](#license)

## Overview
This project shows you how to:
- Create and configure multiple VMs using VirtualBox.
- Enable a newly created shared network across all VMs by adding it through each VM’s network settings.
- Deploy a simple Node.js microservice using Express.
- Test inter-VM connectivity.
- Manage your source code using GitHub.

## Prerequisites
- **VirtualBox:** Install the latest version from [VirtualBox.org](https://www.virtualbox.org/).
- **Linux ISO:** Use a lightweight Linux distribution (e.g., Ubuntu Server).
- **Basic Networking Knowledge:** Familiarity with static IP assignment and VirtualBox networking modes (Host-only or Internal).
- **Node.js and npm:** Required on each VM.

## VM Creation and Configuration
1. **Create VMs:**
   - Open VirtualBox and click **"New"** to create your first VM.
   - Install your chosen Linux OS (e.g., Ubuntu Server).
   - Repeat the process to create at least two VMs (e.g., VM1 and VM2).

2. **Configure VM Settings:**
   - In VirtualBox, select each VM and navigate to **Settings > Network**.
   - Add the shared network by selecting a **Host-only Adapter** or **Internal Network**.
   - Assign static IP addresses (e.g., VM1: `192.168.15.4`, VM2: `192.168.15.5`).
