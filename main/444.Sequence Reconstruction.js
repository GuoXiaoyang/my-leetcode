/**
 * Created by gxy on 2017/6/20.
 */
/****************************************************************
 444.Sequence Reconstruction
 Check whether the original sequence org can be uniquely reconstructed from the
 sequences in seqs. The org sequence is a permutation of the integers from 1 to n,
 with 1 ≤ n ≤ 104. Reconstruction means building a shortest common supersequence of
 the sequences in seqs (i.e., a shortest sequence so that all sequences in seqs are
 subsequences of it). Determine whether there is only one sequence that can be
 reconstructed from seqs and it is the org sequence.

 Example 1:
 Input:
 org: [1,2,3], seqs: [[1,2],[1,3]]
 Output:
 false
 Explanation:
 [1,2,3] is not the only one sequence that can be reconstructed, because [1,3,2] is
 also a valid sequence that can be reconstructed.
 Example 2:

 Input:
 org: [1,2,3], seqs: [[1,2]]
 Output:
 false
 Explanation:
 The reconstructed sequence can only be [1,2].

 Example 3:
 Input:
 org: [1,2,3], seqs: [[1,2],[1,3],[2,3]]
 Output:
 true
 Explanation:
 The sequences [1,2], [1,3], and [2,3] can uniquely reconstruct the original sequence
 [1,2,3].

 Example 4:
 Input:
 org: [4,1,5,2,6,3], seqs: [[5,2,6,3],[4,1,5,2]]
 Output:
 true
 ****************************************************************/
var constructSequences = function (org,seqs) {
  var len=org.length;
  var neighbors={}, inDegree = {};
  for(var i=0; i<seqs.length; i++) {
    for(var j=0;j<seqs[i].length-1;j++) {
      var first=seqs[i][j],second=seqs[i][j+1];
      //in
      if(neighbors[first]==undefined) neighbors[first]={};
      if(inDegree[first]==undefined) inDegree[first]=0;
      //out
      if(inDegree[second]==undefined) inDegree[second]=0;
      if(neighbors[first][second]==undefined) {
        neighbors[first][second]=1;
        inDegree[second]++;
      }
    }
  }
  console.log("inDegree:",inDegree);
  console.log("neighbors:",neighbors);
  var queue=[],count=0;
  for(var item in inDegree) {
    if(inDegree[item]==0) queue.push(item);
  }
  while(queue.length>0) {
    if(queue.length>1) return false;
    count++;
    var node=queue.shift();
    for(item in neighbors[node]) {
      if(--inDegree[item]==0) queue.push(item);
    }

  }
  return count==len;
};

/*var constructSequences = function (org,seqs) {
  var len=org.length;
  var neighbors=new Array(len);
  for(var i=0; i<seqs.length; i++) {
    for(var j=0;j<seqs[i].length-1;j++) {
      for(var k=j+1;k<seqs[i].length;k++) {
        if(neighbors[seqs[i][j]-1]==undefined) neighbors[seqs[i][j]-1]=[];
        neighbors[seqs[i][j]-1].push(seqs[i][k]-1);
      }
    }
  }
  console.log("neighbors:",neighbors);
  //judge every order
  for(i=0;i<org.length-1;i++) {
    if(neighbors[org[i]-1]==undefined || neighbors[org[i]-1].indexOf(org[i+1]-1)==-1) return false;
  }
  return true;
};*/

//test
var org = [4,1,5,2,6,3],seqs=[[5,2,6,3],[4,1,5,2]];
var algo = "algo";
console.time(algo);
var res = constructSequences(org,seqs);
console.timeEnd(algo);
console.log("res:",res);