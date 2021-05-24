<script>
//-------------------------------------------------------------------------------------
// Declare the prop that we receive from the Family component
    export let person;

//-------------------------------------------------------------------------------------
//  jsDate: Convert a mySQL date into a javascript date.
  const jsDate = (mySqlDate) => {
    return new Date(mySqlDate + ' 13:00:00');
  }

//-------------------------------------------------------------------------------------
//  toJsDate: Given a mySQL date and a modifier tag, return one of:
//  . The date as a string
//  . Just the year
//  . 'before ' followed by the year
//  . 'after '  followed by the year
//  . 'about '  followed by the year
//  . '?'
  const toJsDate = (mySqlDate, dateModifier) => {
    let theDate = new Date(mySqlDate + ' 13:00:00');
    let theYear = theDate.getFullYear();
    let rslt    = theDate.toString().substring(4,15);
    if (dateModifier=='year')    {rslt = theYear}
    if (dateModifier=='before')  {rslt = 'before ' + theYear}
    if (dateModifier=='after')   {rslt = 'after '  + theYear}
    if (dateModifier=='about')   {rslt = 'about '  + theYear}
    if (dateModifier=='unknown') {rslt = '?'}
    return rslt;
  }

//-------------------------------------------------------------------------------------
//  getAge: Return a person's age on a given day, or return '?'
  function getAge(birthday, birthMod, thisDay, thisMod) {
    let age ='';
    if (birthMod=='unknown' || thisMod=='unknown') {
        age = '?';
    }
    else {
        var thisYear = 0;
        if (thisDay.getMonth() < birthday.getMonth()) {
            thisYear = 1;
        } else if ((thisDay.getMonth() == birthday.getMonth()) && thisDay.getDate() < birthday.getDate()) {
            thisYear = 1;
        }
        age = thisDay.getFullYear() - birthday.getFullYear() - thisYear;
    }

    return age;
}

//-------------------------------------------------------------------------------------
let dateBrn = toJsDate(person.bornDate, person.bornDateMod);
let dateArv = toJsDate(person.arvDate, person.arvDateMod);
let ageArv  = getAge(jsDate(person.bornDate), person.bornDateMod, jsDate(person.arvDate), person.arvDateMod);
let dateDie = toJsDate(person.diedDate, person.diedDateMod);
let ageDie  = getAge(jsDate(person.bornDate), person.bornDateMod, jsDate(person.diedDate), person.diedDateMod);

</script>

<span class="personName">{person.name}</span><br>
Born    {dateBrn}, {person.bornWhere}<br>
Arrived {dateArv} at {ageArv}<br>
Died    {dateDie} at age {ageDie}

<style>
    .personName {
        font-weight: bold;
    }
</style>
