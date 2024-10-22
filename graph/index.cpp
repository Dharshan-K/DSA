#include<iostream>
#include<unordered_map>
#include<list>

class Graph{
    private:
        std::unordered_map<int, std::list<int>> adjacency_list;

    public:
        void addEdge(int v, int w){
            adjacency_list[v].push_back(w);
            adjacency_list[w].push_back(v);            
        }

        void printGraph(){
            for(const auto& pair: adjacency_list){
                std::cout << " " << pair.first;
                for(int num: pair.second){
                    std::cout << " " << num << std::endl;
                }
            }            
        }
};

int main() {
    // Creating a graph and adding edges
    Graph myGraph;
    myGraph.addEdge(0, 1);
    myGraph.addEdge(0, 2);
    myGraph.addEdge(1, 2);
    myGraph.addEdge(1, 3);
    myGraph.addEdge(2, 3);

    // Printing the graph
    myGraph.printGraph();

    return 0;
}