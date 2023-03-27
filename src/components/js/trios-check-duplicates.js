//if there are two of the same legend on a trios team => return true, else no duplicates found => reutrn false
function TriosCheckDupe(squares) {
    if (squares[0] === squares[1] || squares[0] === squares[2] || squares[1] === squares[2]){
        return true;
    }
    else{
        return false;
    }
}

//exports the function for use elsewhere in application
export default TriosCheckDupe