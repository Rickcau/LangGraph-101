# LangGraph 101

## Introduction

This repository is designed to help you learn the fundimentals of LangGraph, it is a refacoring of the materials found in the [langchain-academy repo](https://github.com/langchain-ai/langchain-academy), but targeting Azure OpenAI with my prospective being added.  

You will find [Jupyter](https://jupyter.org/) notebooks and Python Programs that demostrate various concepts.  I would recommend that you work through all the Notebooks, cell by cell as it's the easiest to learn the concepts in an incremental  way.  Once you finish all the modules in the Notebooks, then you can dive into the various Programs.

## Observations

Based on my experience with LangGraph, so far, I can tell you it is **very** powerful and it does have a lot of capabilities.  As with any framework, there are pros and cons. Some of the lighter weight frameworks like Semantic Kernal and CrewAI are easier to use.  Although many of these frameworks can be very powerful, many of the patterns can be implemented without the use of these frameworks. Often, I feel like many of these frameworks are over engineered and I can achieve a much more performant solution without their use, but that is just my opinion, there are tradeoffs no matter which approach you do with.

### Pros:

- Enables building complex, stateful AI workflows with cyclic execution
- Provides structured representation of data and processes8
- Offers scalability for handling large volumes of data8
- Allows for clear visualization of AI agent interactions1

### Cons:

- Can be complex to set up and understand for new users
- May introduce performance overhead for very large datasets
- Memory and resource intensive
- Some users find examples don't always require cycles, potentially overcomplicating simple tasks

## Graph Structure

The concept of modeling workflows as a graph is a very powerful concept.  This graph-based approach offers several key advantages over traditional linear workflows: 
near workflows:

### LangGraph represents workflows using three main components:

1. **State**: A shared data structure representing the current snapshot of the application.
2. **Nodes**: Python functions that encode the logic of agents or tasks.
3. **Edges**: Functions that determine which node to execute next based on the current state.

This structure allows for the creation of complex, looping workflows that evolve the state over time. The power of LangGraph lies in its ability to manage this state effectively.

### Benefits of Graph-Based Workflows
#### Flexibility and Adaptability

LangGraph enables the development of workflows with multiple loops and conditional statements3. This flexibility allows for:

- **Dynamic Decision-Making**: Workflows can branch and adapt based on real-time conditions and LLM outputs2.
- **Iterative Processes**: Tasks can be retried or refined based on intermediate results.
- **Multi-Agent Collaboration**: Multiple agents or tools can work together in a coordinated manner2.

#### Cyclic Execution

Unlike traditional Directed Acyclic Graphs (DAGs), LangGraph supports cyclic graphs6. This means:
- Workflows can loop back to previous steps if needed.
- Agents can revisit and improve upon earlier actions based on new information10.

#### State Management

LangGraph's state management capabilities are crucial for complex AI applications:
- The shared state allows for information to be passed and transformed throughout the workflow1.
- Built-in persistence enables features like checkpointing, human-in-the-loop interactions, and fault tolerance

#### Practical Applications

The graph-based approach of LangGraph is particularly useful for:
1. Multi-Agent Systems: Enabling coordinated actions between multiple AI agents10.
2. Human-AI Collaboration: Facilitating seamless interaction between humans and AI agents during workflow execution8.
3. Complex Decision Trees: Implementing branching logic and conditional flows based on AI outputs

## Setup
In order to get things setup locally, you need to make sure you have Python version 3.11 or later.  Below you find details on how to verify your Pythoin Version, how to clone or fork the repo, creating your Python environment etc.  Once you have everything setup, you can start your LangGraph learning journey.

### Python version

Please ensure you're using Python 3.11 or later. 
This version is required for optimal compatibility with LangGraph. If you're on an older version, 
upgrading will ensure everything runs smoothly.

Open a terminal window in VS Code and run the following command

```
python --version
```

### Clone repo
```
git clone https://github.com/rickcau/LangGraph-101.git
$ cd LangGraph-101
```

### Create an environment and install dependencies
#### From VS Code
Open a terminal window and run the following commands.

```
python -m venv LangGraph-101-env
.\LangGraph-101-env\Scripts\activate
pip install -r requirements.txt
```

### Running notebooks
If you don't have Jupyter set up, install the Jupter extension in VS Code.  We will leverage notebooks to demo various examples.

### Collect all your resouce details from Azure
* Naviagte to the Azure Portal and collect all the AI resource detatils for both AI Search and Azure OpenAI endpoints.

### Setting up .env variables
Briefly going over how to set up environment variables. You will find an example .env file in the root folder `env.example` you need to rename that file
to `.env` and make sure to see all the variables to point to your Azure Resources.

### Running notebooks
If you don't have Jupyter set up, install the Jupter extension in VS Code.  We will leverage notebooks to demo various examples.


