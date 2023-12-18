import graph.Edge;
import graph.Graph;
import graph.Node;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

public class Kruskal {

    private final Graph graph;
    public Kruskal(Graph graph) {
        this.graph = graph;
    }

    public List<Couples> doKruskal() {
        //sort the edges
        List<Edge> edgeList = graph.getEdgeList();
        List<Node> nodeList = graph.getNodeList();
        edgeList.sort(new Comparator<Edge>() {
            @Override
            public int compare(Edge o1, Edge o2) {
                return o1.getWeight() - o2.getWeight();
            }
        });

        //initializing list of empty couples
        List<Couples> finalResultCouples = new ArrayList<>(Collections.emptyList());
        List<List<Node>> disjointSet = new ArrayList<>();
        //initialize disjoint Set
        for (Node node : nodeList) {
            disjointSet.add(
                    List.of(
                            node
                    )
            );
        }
        int counter = 0;
        while (finalResultCouples.size() < (nodeList.size() - 1)) {
            Edge choosedEdge = edgeList.get(counter);
            Couples correspondingCouple = findCorrespondingCouple(choosedEdge);
            List<Node> uComp = find(correspondingCouple.getNode1(), disjointSet);
            List<Node> vComp = find(correspondingCouple.getNode2(), disjointSet);
            if (uComp != vComp){
                //merge node 1 and node 2 together
                boolean rm1 = disjointSet.remove(uComp);
                boolean rm2 = disjointSet.remove(vComp);
                List<Node> newList = new ArrayList<>();
                boolean addAll = newList.addAll(uComp);
                boolean addAll2 = newList.addAll(vComp);
                disjointSet.add(0, newList);
                //System.out.println("Disjoint: "+disjointSet);
                //System.out.println(rm1+" "+rm2+" "+addAll+" "+addAll2);
                //union of final result
                finalResultCouples.add(correspondingCouple);
                //System.out.println("Final"+finalResultCouples);
                //System.out.println("Size of Final"+finalResultCouples.size());
                //System.out.println("Size of node list"+nodeList.size());
            }
            counter++;
        }
        return finalResultCouples;
    }

    public void showChoosedCouples(List<Couples> couplesList) {
        int total = 0;
        for (Couples couple : couplesList) {
            System.out.println(couple);
            total += couple.getEdge().getWeight();
        }
        System.out.println("The final total is: "+total);
    }

    private List<Node> find(Node node, List<List<Node>> disjointSet) {
        for (List<Node> nodeList: disjointSet) {
            if (nodeList.contains(node))
                return nodeList;
        }
        return Collections.emptyList();
    }

    private Couples findCorrespondingCouple(Edge choosedEdge) {
        int firstNodeIndex = choosedEdge.getId() / 10 - 1;
        int secondNodeIndex = choosedEdge.getId() % 10 - 1;
        return new Couples(
                graph.getNodeList().get(firstNodeIndex),
                graph.getNodeList().get(secondNodeIndex),
                choosedEdge
        );
    }
}

class Couples {
    private Node node1;
    private Node node2;

    private Edge edge;
    public Couples(Node node1, Node node2, Edge edge) {
        this.node1 = node1;
        this.node2 = node2;
        this.edge = edge;
    }

    public Node getNode1() {
        return node1;
    }

    public void setNode1(Node node1) {
        this.node1 = node1;
    }

    public Node getNode2() {
        return node2;
    }

    public void setNode2(Node node2) {
        this.node2 = node2;
    }

    public Edge getEdge() {
        return edge;
    }

    public void setEdge(Edge edge) {
        this.edge = edge;
    }

    @Override
    public String toString() {
        return "Couples{" +
                "node1=" + node1.getValue() +
                ", node2=" + node2.getValue() +
                ", edge=" + edge +
                '}';
    }
}
