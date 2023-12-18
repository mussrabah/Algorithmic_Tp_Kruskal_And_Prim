import graph.Graph;

public class Main {
    public static void main(String[] args) {

        Graph graph = new Graph();
        graph.fillGraph();
        //graph.showGraph();
        Kruskal kruskal = new Kruskal(graph);
        kruskal.showChoosedCouples(kruskal.doKruskal());
    }
}