<?php
    if(isset($_GET['getData'])){

        $data = $_GET['getData'];
        $query = '"C:\\Program Files\\swipl\\bin\\swipl.exe" -g "parts('.$data.'),halt" -t "halt(1)" -s "index.pl"';

        $cmd = exec($query, $output, $return_var);

        if($return_var === 0){
            echo json_encode($output);
        }
    }

?>