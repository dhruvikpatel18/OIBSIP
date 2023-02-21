const calculateTemp = () =>{
    const tempNum = document.getElementById('temp').value; // user input temp

    const tempSelect = document.querySelector('#temp_diff');
    const tempVal = temp_diff.options[tempSelect.selectedIndex].value;//user selected temp type

    //cel to fah
    const celToFah = (cel) =>{
        let fahrenheit = (cel * (9/5) + 32);
        return fahrenheit;
    }
    //fah cel
    const fahToCel = (fahr) =>{
        let celsius = ((fahr-32) * 5/9);
        return celsius;
    }

    let ans;

    if(tempVal == 'cel'){
        ans = celToFah(tempNum);
        document.getElementById('outputRes').innerHTML = `${ans}°Fahrenheit`;
    }else{
        ans = fahToCel(tempNum);
        document.getElementById('outputRes').innerHTML = `${ans}°Celsius`;
    }
    
    window.alert('This page will reload after 5 second!');
    setTimeout(() => {
        window.location.reload();
    }, 5000);
    
}
