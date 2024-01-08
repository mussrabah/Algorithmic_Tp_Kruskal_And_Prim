# Graph Algorithms Implementation

This project contains the implementation of two popular graph algorithms - Prim's Algorithm and Kruskal's Algorithm in Java. 

## Classes

### 1. Prim

`Prim` is a Java class that implements Prim's algorithm, which is used for finding the minimum spanning tree of a graph. 

Key methods of the `Prim` class include:

* `Prim(Graph graph)`: Constructor that accepts a Graph object.
* `doPrim()`: Method that implements Prim's algorithm and returns a set of Couples representing the minimum spanning tree.
* `searchForDistance(Node node1, Node node2)`: Returns the weight of the edge between the two provided nodes, otherwise, returns the maximum integer value.
* `showChoosedCouples(Set<Couples> couplesList)`: Shows or prints the edges which are chosen in the minimum spanning tree and its total weight.

### 2. Kruskal

`Kruskal` is a Java class that implements Kruskal's algorithm, which is also used for finding the minimum spanning tree of a graph.

Key methods of the `Kruskal` class include:

* `Kruskal(Graph graph)`: Constructor that accepts a Graph object.
* `doKruskal()`: Method that implements Kruskal's Algorithm and returns the minimum spanning tree as a list of 'Couples' objects.
* `showChoosedCouples(List<Couples> couplesList)`: Prints the chosen edges (encapsulated in a 'Couples' object) of the minimum spanning tree.

## Setup

This is a Java project, so ensure you have Java installed on your machine. To setup the project, follow the steps below:

```bash
# Clone the repository
git clone https://github.com/mussrabah/Algorithmic_Tp_Kruskal_And_Prim

# Navigate to project directory
cd Algorithmic_Tp_Kruskal_And_Prim

# Compile and run the project
javac Main.java
java Main
