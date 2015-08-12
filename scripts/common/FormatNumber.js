function addCommas( tmp )
{
	var s = ''
	var len = tmp.length
	var end = len - 1
	for ( var i = 0; i < len; i++ )
	{
		c = tmp.charAt( end - i )
		s = c + ((i > 2 && i % 3 == 0) ? ',' : '') + s
	}
	return s
}


function isOverflow( n )
{
	return ( isNaN( n ) || n == Number.POSITIVE_INFINITY || n == Number.NEGATIVE_INFINITY )
}

function strToInt( s )
{
	var n = parseInt( removeNonNumerics( s ) )
	if ( isNaN( n ) )
	{
		n = 0
	}
	return (n < 0) ? 0 : n;
}

function strToFloatMax( s, m )
{
	var x = strToFloat( s )
	if ( x > m )
        {
            x = m
        }
	return x
}


function _numToUnits( n, units_prefix, decimal_places, units_suffix )
{
	if ( isOverflow( n ) ) return '<i>numeric overflow</i>'
	var isNegative = ( n < 0 ) ? true : false
	var s = ''
	var d = strToInt( decimal_places )


	// get precision value
	var x = Math.abs( Math.round ( n * Math.pow(10, decimal_places ) ) )

	// if zero, return default string
	if ( x == 0 )
	{
		var defaultStr = '0'
		if ( d > 0 )
		{
			defaultStr += '.'
			for ( var i = 0; i < d; i++ ) defaultStr += '0'
		}
		defaultStr = units_prefix + defaultStr + units_suffix
		return defaultStr
	}

	// create the number string
	if ( d == 0 )
	{
		var tmp = '' + x
		s = addCommas( tmp )
	}
	else
	{
		var leftTmp = '' + x
		var rightTmp = '' + x
		var len = leftTmp.length

		// left pad with zeros to make at least d + 1 characters
		for ( var i = 0; i < d + 1 - len; i++ )
		{
			leftTmp = '0' + leftTmp
			//rightTmp = '0' + leftTmp
			rightTmp = '0' + rightTmp
		}

		len = leftTmp.length
		var decimalSplit = len - d

		var leftStr = addCommas( leftTmp.substring( 0, decimalSplit ) )
		var rightStr = rightTmp.substring( decimalSplit, len )

		s = leftStr + '.' + rightStr
	}

	// add units
	s = units_prefix + s + units_suffix

	// add negative sign (if needed)
	if ( isNegative ) s = '-' + s

	return s
}

function numToDollars( n )
{
	return _numToUnits( n, '', 2, '' ) //' RP' )
}

function numToPercent( n )
{
	return _numToUnits( n, '', 2, ' %' )
}

function numToUnits( n, units )
{
	return _numToUnits( n, '', 0, ' ' + units )
}

// NOTE: returns absolute value of integer entered clipped at a maximum value of 'm'
function strToIntMax( s, m )
{
	var x = strToInt( s )
	if ( x > m ) x = m
	return x
}

function isNumeric( c )
{
	return ( c == '.' || c == '-' || ( c >= '0' && c <= '9') )
}


function removeNonNumerics( s )
{
	if ( s == null ) return null
	s = '' + s
	var tmp = ''
	var isLeadingZero = true
	for ( var i = 0; i < s.length; i++ )
	{
		var c = s.charAt( i )
		if ( isNumeric( c ) )
		{
			if ( isLeadingZero == true && c == '0' )
			{
				continue;  // remove leading zeros to avoid javascript octal conversion
			}
			else
			{
				isLeadingZero = false
			}
			tmp = tmp + c
		}
	}
	return tmp
}


function strToIntRange( s, low, high ) {

	var num = strToInt(s);
	if(num < low)
		num = low;
	else
	if(num > high)
		num = high;
	return num;
}

// NOTE: returns absolute value of float entered
function strToFloat( s )
{
	var n = parseFloat( removeNonNumerics( s ) )
	if ( isNaN( n ) )
	{
		n = 0
	}

	return (n < 0) ? 0 : n;

//	return Math.abs( n )
}


function FormatCurrency( txt )
{
	txt.value = numToDollars(strToFloat(txt.value));
}
