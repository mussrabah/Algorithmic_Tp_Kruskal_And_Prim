package graph;

import java.util.ArrayList;
import java.util.List;

public class Graph {
    private List<Node> nodeList;
    private List<Edge> edgeList;

    public Graph() {
        nodeList = new ArrayList<>();
        edgeList = new ArrayList<>();
    }

    public void addNode(Node node) {
        nodeList.add(node);
    }

    public void addEdge(Edge edge) {
        edgeList.add(edge);
    }
    public List<Node> getNodeList() {
        return nodeList;
    }

    public List<Edge> getEdgeList() {
        return edgeList;
    }

    public void fillGraph() {
        List<Edge> edges = List.of(
                new Edge(12, 1),
                new Edge(13, 3),
                new Edge(23, 3),
                new Edge(24, 6),
                new Edge(34, 4),
                new Edge(35, 2),
                new Edge(45, 5)
        );
        for (int i = 0; i < 5; i++) {
            Node newNode = new Node("V"+(i+1), new ArrayList<>());
            addNode(newNode);
        }
        for (int i = 0; i < 5; i++) {
            for (int j = 0; j < 7; j++) {
                if (i == 0)
                    addEdge(edges.get(j));

                if ((edges.get(j).getId() % 10 == (i + 1)) || edges.get(j).getId() / 10 == (i + 1)) {
                    nodeList.get(i).addEdge(edges.get(j));
                }
            }
        }
    }

    public void fillGraph2() {
        List<Edge> edges = List.of(
                new Edge(12, 1),
                new Edge(13, 3),
                new Edge(23, 7)
        );
        for (int i = 0; i < 3; i++) {
            Node newNode = new Node("V"+(i+1), new ArrayList<>());
            addNode(newNode);
        }
        for (int i = 0; i < 3; i++) {
            for (int j = 0; j < 3; j++) {
                if (i == 0)
                    addEdge(edges.get(j));

                if ((edges.get(j).getId() % 10 == (i + 1)) || edges.get(j).getId() / 10 == (i + 1)) {
                    nodeList.get(i).addEdge(edges.get(j));
                }
            }
        }
    }

    public void showGraph() {
        for (int i = 0; i < nodeList.size(); i++) {
            System.out.println("Node: "+nodeList.get(i));
            System.out.println("Its edges: "+nodeList.get(i).getEdgeList());
        }
    }
}
