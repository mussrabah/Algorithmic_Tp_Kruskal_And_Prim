import graph.Edge;
import graph.Graph;
import graph.Node;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class Prim {
    private Graph graph;

    public Prim(Graph graph) {
        this.graph = graph;
    }

    public Set<Couples> doPrim() {
        List<Node> nodeList = graph.getNodeList();
        Set<Couples> t = new HashSet<>();
        Set<Edge> t2 = new HashSet<>();
        int[] nearest = new int[nodeList.size()];
        int[] distance = new int[nodeList.size()];

        for (int i = 1; i < nodeList.size(); i++) {
            nearest[i] = 0;
            distance[i] = searchForDistance(nodeList.get(0), nodeList.get(i));
        }

        for (int i = 0; i < nodeList.size() - 1; i++) {
            int min = Integer.MAX_VALUE;
            int vNear = 0;
            for (int j = 1; j < nodeList.size(); j++) {
                if (distance[j] >=0 && distance[j] < min) {
                    min = distance[j];
                    vNear = j;
                }
            }
            Edge e = serachForEdge(nodeList.get(vNear), nodeList.get(nearest[vNear]));
            t2.add(e);
            t.add(new Couples(nodeList.get(vNear), nodeList.get(nearest[vNear]), e));
            distance[vNear] = -1;
            for (int j = 1; j < nodeList.size(); j++) {
                if (searchForDistance(nodeList.get(j), nodeList.get(vNear)) < distance[j]) {
                    distance[j] = searchForDistance(nodeList.get(j), nodeList.get(vNear));
                    nearest[j] = vNear;
                }
            }
        }
        return t;
    }

    private Edge serachForEdge(Node node1, Node node2) {
        List<Edge> node1EdgeList = node1.getEdgeList();
        List<Edge> node2EdgeList = node2.getEdgeList();
        for(Edge edge1: node1EdgeList) {
            for (Edge edge2: node2EdgeList) {
                if (edge1.getId() == edge2.getId()) {
                    return edge1;
                }
            }

        }
        return null;
    }

    private int searchForDistance(Node node1, Node node2) {
        List<Edge> node1EdgeList = node1.getEdgeList();
        List<Edge> node2EdgeList = node2.getEdgeList();
        for(Edge edge1: node1EdgeList) {
            for (Edge edge2: node2EdgeList) {
                if (edge1.getId() == edge2.getId()) {
                    return edge1.getWeight();
                }
            }

        }
        return Integer.MAX_VALUE;
    }

    public void showChoosedCouples(Set<Couples> couplesList) {
        int total = 0;
        for (Couples couple : couplesList) {
            System.out.println(couple);
            total += couple.getEdge().getWeight();
        }
        System.out.println("The final total is: "+total);
    }
}
