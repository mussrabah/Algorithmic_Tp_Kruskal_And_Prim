import graph.Graph;

public class Main {
    public static void main(String[] args) {

        Graph graph = new Graph();

        System.out.println("-----------------------------First Graph----------------------------------");
        System.out.println();

        graph.fillGraph();
        //graph.showGraph();
        compareKruskalAndPrim(graph);

        System.out.println();
        System.out.println("-----------------------------Second Graph----------------------------------");
        System.out.println();

        graph = new Graph();
        graph.fillGraph2();
        //graph.showGraph();
        compareKruskalAndPrim(graph);
    }

    private static void compareKruskalAndPrim(Graph graph) {
        Kruskal kruskal = new Kruskal(graph);
        var startTime = (double) System.nanoTime();
        kruskal.showChoosedCouples(kruskal.doKruskal());
        var elapsedTime = (double) System.nanoTime();
        System.out.println("Runtime of Kruskal is: "+(elapsedTime - startTime) / (1_000_000d)+" ms");

        Prim prim = new Prim(graph);
        startTime = (double) System.nanoTime();
        prim.showChoosedCouples(prim.doPrim());
        elapsedTime = (double) System.nanoTime();
        System.out.println("Runtime of Prim is: "+(elapsedTime - startTime) / (1_000_000d)+" ms");
    }
}