<!-- 
    PERSONHEADER COMPONENT
    Display info for an individual: thumbnail pic, birth and death dates, etc.
 -->
<script>
//
// Display info for an individual: thumbnail pic, birth and death dates, etc.
//

export let person;

//  Convert a mySQL date into a javascript date.
  const jsDate = (mySqlDate) => {
    return new Date(mySqlDate + ' 13:00:00');
  }

//  Given a mySQL date and a modifier tag, return one of:
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

//  Return a person's age on a given day, or return '?'
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

</script>

<span class="personName">{person.name}</span>

<br>

Born 
{toJsDate(person.bornDate, person.bornDateMod)}, 
{person.bornWhere}
<br>

Arrived 
{toJsDate(person.arvDate, person.arvDateMod)} at
{getAge(jsDate(person.bornDate), person.bornDateMod, 
        jsDate(person.arvDate), person.arvDateMod)}
<br>

Died 
{toJsDate(person.diedDate, person.diedDateMod)}
<!-- , {person.diedWhere} -->
<!-- <br> -->

at age 
{getAge(jsDate(person.bornDate), person.bornDateMod, 
        jsDate(person.diedDate), person.diedDateMod)}


<style>

    .personName {
        font-weight: bold;
    }

</style>
