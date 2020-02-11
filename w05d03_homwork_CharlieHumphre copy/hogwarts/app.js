// console.log($)
$(() => {
    // Year One
    const $container = $('<div>')
    $container.attr('id', 'container');
    // console.log($containter);
    const $h1 = $('<h1>')
    // console.log($h1)
    $h1.text('Hogwarts')
    $('body').append($container)
    $container.append($h1)

    // Year Two
    const $h2 = $('<h2>').text('Charlie')
    $container.append($h2)
    const $h3 = $('<h3>').text('Hufflepuff')
    $container.append($h3)
    // make $pet element an h4 
    const $pet = $('<h4>').addClass('cat').text('Calicifer')
    $container.append($pet)
    // call $h4 elemnt something dif to not overwrite pet. 
    // will both be h4 but dif styling for cat class
    const $wand = $('<h4>').text('Hornbeam Wand with Dragon Heartstring Core')
    $container.append($wand)
   
    // Year Three
    // create unordered list
    const $list = $('<ul>').attr('storage', 'trunk')
    $container.append($list)
    // had to add them all by hand. Not sure how to do this in a DRY way
    $first = $('<li>').text('Butter Beer')
    $list.append($first)
    $second = $('<li>').text('Invisibility Cloak').addClass('secret')
    $list.append($second)
    $third = $('<li>').text('Magic Map').addClass('secret')
    $list.append($third)
    $fourth = $('<li>').text('Time Turner').addClass('secret')
    $list.append($fourth)
    $fifth = $('<li>').text('Leash').addClass('cat')
    $list.append($fifth)
    $sixth = $('<li>').text('Bertie Bott\'s Every Flavor [Jelly] Beans')
    $list.append($sixth)
    
   // Year Four
    const $h5 = $('<h5>').text('Spring 2017')
    $container.append($h5)
    const $table = $('<table>')
    $container.append($table)
    // titles of cells 
    const $trOne = $('<tr>')
    $table.append($trOne)
    const $topRowOne = $('<th>').text('Day')
    const $topRowTwo = $('<th>').text('Classes')
    $trOne.append($topRowOne)
    $trOne.append($topRowTwo)
    // Monday 
    const $trTwo = $('<tr>')
    $table.append($trTwo)
    const $dayOne = $('<td>').text('Monday')
    const $classOne = $('<td>').text('Herbology')
    $trTwo.append($dayOne)
    $trTwo.append($classOne)
    // Tuesday
    const $trThree = $('<tr>')
    $table.append($trThree)
    const $dayTwo = $('<td>').text('Tuesday')
    const $classTwo = $('<td>').text('Charms')
    $trThree.append($dayTwo)
    $trThree.append($classTwo)
    // Wednesday
    const $trFour = $('<tr>')
    $table.append($trFour)
    const $dayThree = $('<td>').text('Wednesday')
    const $classThree = $('<td>').text('Transfiguration')
    $trFour.append($dayThree)
    $trFour.append($classThree)
    // Thursday
    const $trFive = $('<tr>')
    $table.append($trFive)
    const $dayFour = $('<td>').text('Thursday')
    const $classFour = $('<td>').text('Quidditch practice')
    $trFive.append($dayFour)
    $trFive.append($classFour)
    // Friday
    const $trSix = $('<tr>')
    $table.append($trSix)
    const $dayFive = $('<td>').text('Friday')
    const $classFive = $('<td>').text('Potions')
    $trSix.append($dayFive)
    $trSix.append($classFive)


    // Year Five
    $wand.remove()
    $first.remove()
    $pet.append($wand)
    $wand.text('Hawthorn Wand with Unicorn Hair Core')
    $('wand').removeClass('cat')
    $wand.css('color', 'brown')
    $pet.remove().prependTo($classThree)
    $pet.remove().appendTo($h3)


    // Year Six
    $('.secret').delay(2000).hide('slow')
    $('.secret').show('slow')
    $fifth.addClass('cabbage')
    $fifth.removeClass('cabbage')


    // Year Seven 
    $h5.text('Spring 2018')
    $first.prependTo($list)
    $list.attr('storage', 'chest')
    

});