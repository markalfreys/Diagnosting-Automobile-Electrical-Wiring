var questionNum = 0;
$('#contBtn').click(()=>{
    startAsking()
})

$('.diagnoseBtn').click(()=>{
    startAsking()
    
    $('.questionBtn').css('display', 'flex')
    $('.sugContainer').css('display', 'none')
    $('.diagnoseBtnContainer').css('display', 'none')
})

const startAsking = () => {
    $('.welcome').css('display', 'none')
    $('.questionBoxContainer').css('display', 'flex')
    questionNum = 0;
    changeText(questions[0].question);

}

const changeText = (t) => {
    $('.questionText').html(t)
}

$('#ansYes').click(()=>{

    ++questionNum
    if(questionNum < questions.length && questionNum >= 0) 
        changeText(questions[questionNum].question);


    if(questionNum >= questions.length) {
        changeText('Then the Engine is the Fault!!');
        $('.questionBtn').css('display', 'none')
        $('.diagnoseBtnContainer').css('display', 'flex')
    }
})

$('#ansNo').click(()=>{
    getAnswerProlog(questions[questionNum].query)
})

const showSolution = (data) => {
    $('.questionBtn').css('display', 'none')
    changeText(`Then the ${questions[questionNum].partsName} is the Fault!!`);
    $('.sugContainer').css('display', 'block')
    
    let solTextInnerHtml = ""
    
    for (let i = 0; i < data.length; i++) {
        solTextInnerHtml += `${data[i]} <br><br>`
        
    }
    
    $('.solText').html(solTextInnerHtml)
    $('.diagnoseBtnContainer').css('display', 'flex')

}


const getAnswerProlog = (q) => {
    $.get("../Diagnosting Automobile Electrical Wiring System/prolog/index.php?getData="+q, function(res, status) {
        if(status === 'success'){
            showSolution(JSON.parse(res))
        }
    })
}

const questions = [
    {
        partsName: 'Rotor',
        query: 'alternator, rotor',
        question: 'The problem maybe occur in the parts of the Alternator<br><br>Does the rotor are still connected to slip ring?'
    },
    {
        partsName: 'Stator',
        query: 'alternator, stator',
        question: 'Does the stator are not grounded?'
    },
    {
        partsName: 'Diode Rectifier',
        query: 'alternator, diode_rectifier',
        question: 'Does the Diode Rectifier can still generate electrical energy?'
    },
    {
        partsName: 'IC Regulator',
        query: 'alternator, ic_regulator',
        question: 'Does the IC Regulator can still send electrical energy to the battery?'
    },
    {
        partsName: 'Carbon Brush',
        query: 'alternator, carbon_brush',
        question: 'Does the Carbon Brush are still long?'
    },
    {
        partsName: 'Battery',
        query: 'battery',
        question: 'If the Alternator is functioning well, then the problem might be in the battery<br><br>Does the battery can still be charged?'
    },
    {
        partsName: 'Fuel Pump',
        query: 'fuel_pump',
        question: 'Does the Fuel Pump can still send a fuel in carburetor?'
    },
    {
        partsName: 'Carburetor',
        query: 'carburetor',
        question: 'Does the Carburator are not drowned in fuel?'
    },
    {
        partsName: 'Ignition Coil',
        query: 'ignition_coil',
        question: 'Does the Ignition Coil can still send a electrical energy to distributor?'
    },
    {
        partsName: 'Distributor',
        query: 'distributor',
        question: 'Does the Distributor can still distribute the electrical energy to each spark plugs?'
    },
    {
        partsName: 'Spark Plug',
        query: 'spark_plug',
        question: 'Does the Spark Plug can send electrical energy to Engine?'
    }
]