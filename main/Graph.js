/**
 * Created by gxy on 2017/6/22.
 */
function UndirectedGraphNode(label) {
    this.label = label;
    this.neighbors = [];   // Array of UndirectedGraphNode
}

function UndirectedGraph (neighbors,i) {
  this.rootNode=this.init(neighbors,i);
}

UndirectedGraph.prototype.init = function (neighbors,i) {
  for(var node in neighbors) {
    if(neighbors[node].length!==0) {

    }
  }

};


