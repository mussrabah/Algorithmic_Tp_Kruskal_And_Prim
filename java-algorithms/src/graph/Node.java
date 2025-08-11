package graph;

import java.util.List;

public class Node {
    private String value;
    private List<Edge> edgeList;

    public Node(String value, List<Edge> edgeList) {
        this.value = value;
        this.edgeList = edgeList;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public List<Edge> getEdgeList() {
        return edgeList;
    }

    public void setEdgeList(List<Edge> edgeList) {
        this.edgeList = edgeList;
    }
    public void addEdge(Edge edge) {
        this.edgeList.add(edge);
    }

    @Override
    public String toString() {
        return "Node{" +
                "value='" + value + '\'' +
                ", edgeList=" + edgeList +
                '}';
    }
}
