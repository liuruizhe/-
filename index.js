<script>

    var nowRun = (function(){
        var n = 1;
        function b(){
            console.log(n++);
        }
        return b;
    })();

    nowRun);
    nowRun();
    nowRun();




</script>
