<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>YMCA</title>
    <link rel="icon" href="/media/custome/favicon.png" type="image/x-icon">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</head>
<style>
.container-fluid{
        background: #F0F2F5;
    }
.col-sm-12{
    margin-left: 7px;
}
.table-striped>tbody>tr:nth-child(even)>td {
   background-color: #00A1E4; 
   opacity: 60%;
   color: black;
   font-weight: 900;
 }
.table-striped>tbody>tr:nth-child(odd)>td {
    background-color: whitesmoke; 
   opacity: 60%;
   color: black;
   font-weight: 900;
 }
 .display-flex{
    display: flex !important;
 }
.fw{
    font-weight: bolder;
}
</style>
<body>
    <h2>{{$main_data['association']['name']}}</h2>
    <div class="container-fluid m-2 mr-2">
        <div class="row">
            <div class="col-sm-12">
                <h5>Submission details</h5>
                <div class="mb-5">
                    <div class="bg-white p-3 rounded" style="width:40%;float:left;">
                        <h6>{{$main_data['branch']['name']}}</h6>
                        <h6>{{ date('d/M/y', strtotime($main_data['created_at'])) }}</h6>
                        {{-- <table>
                            <tr>
                                <td>Branch name</td>
                                 <td></td>
                                 <td></td>
                                 <td></td>
                                 <td></td>
                                 <td></td>
                                <td>Date</td>
                            </tr>
                            <tr>
                                <td>{{$branch_name}}</td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </table> --}}
                    </div>
                </div>
                <br><br>
                <h5 class="mb-1 mt-3">Personal details</h5>
                <div class="bg-white p-3 rounded" style="margin-right: 2%">
                    <div class="" style="width:48%; float: right;">
                        <span>Last name</span><br>
                        <h6>{{$main_data['last_name']}}</h6>
                        <hr>
                    </div>
                    <div class="" style="width:48%;">
                        <span>First name</span><br>
                        <h6>{{$main_data['first_name']}}</h6>
                        <hr>
                    </div>
                    <div style="width:48%;float: right;">
                        <span>Number of people in household</span><br>
                        <h6>{{$main_data['no_of_people']}}</h6>
                        <hr>
                    </div>
                    <div style="width:48%;">
                        <span>Email id</span><br>
                        <h6>{{$main_data['email_id']}}</h6>
                        <hr>
                    </div>
                    <div style="width:48%;float: right;">
                        <span>Birthday</span><br>
                        <h6>{{$main_data['birthday']}}</h6>
                        <hr>
                    </div>
                    <div style="width:48%;">
                        <span>Phone number</span><br>
                        <h6>{{$main_data['phone']}}</h6>
                        <hr>
                    </div>
                    <div>
                        <span>Address</span><br>
                        <h6>{{$main_data['street_address']}} {{$main_data['address']}}</h6>
                        <hr>
                    </div>
                    <div style="width:31%;float: right;">
                        <span>Zip code</span><br>
                        <h6>{{$main_data['zip_code']}}</h6>
                        <hr>
                    </div>
                    <div style="width:31%;float: right;padding-right: 4%;">
                        <span>State</span><br>
                        <h6>{{$main_data['state']}}</h6>
                        <hr>
                    </div>
                    <div style="width:31%;">
                        <span>City</span><br>
                        <h6>{{$main_data['city']}}</h6>
                        <hr>
                    </div>
                </div>
                <?php
                    if($main_data['association']['pre_text']){
                ?>
                <div class="bg-white px-3 pt-3 pb-1 mt-2 rounded" style="margin-right: 2%">
                    <h6 style="font-size: 18px;">*{{$main_data['association']['pre_text']}}</h6>
                </div>
                <?php
            }
            ?>
                <p class="fw mt-1" style="font-size: 16px;">{{$main_data['first_name']}} is qualified for the following financial assistance.</p>
                <div class="table-responsive text-center bg-white" style="width: 50%">
                    <table class="table table-striped p-2">
                        <tbody>
                            @php 
                            $plans_data=json_decode($main_data['plans']['plans'],true);
                            $output = array_slice($plans_data, 3); 
                            foreach ($output as $key => $value) {
                                echo "<tr class='m-2'>";
                                echo "<td>".$key."</td>";
                                echo "<td>".$value."</td>";
                                echo "</tr>";    
                            }  
                            // for($i=0;$i<sizeof($plans_data);$i++){
                            
                            // } 
                            @endphp
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</body>
</html>