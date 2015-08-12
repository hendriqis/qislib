//
// 2003 AnthonieCh@Hotmail.com
//


// declare global variables
var rowsSelected = 0;

/*	
	change the background color of a row when selected and also count how many rows are selected
*/
function colorRow(srcElement)
{
	var cb = event.srcElement;	
	var curElement = cb;		
	
	while (curElement && !(curElement.tagName == "TR"))
	{
		curElement = curElement.parentElement;
	}
	
	if (!(curElement == cb) && (cb.name != "cbxSelectAll"))
	{
		if (cb.checked)
		{
			curElement.style.backgroundColor = "#FFD27A";
			curElement.style.color = "#000000";
			rowsSelected = rowsSelected + 1;
			document.all.cbxSelectAll.checked = false;
		}
		else
		{
			curElement.style.backgroundColor = "#FFFFFF";
			curElement.style.color = "#000000";
			rowsSelected = rowsSelected - 1;
			document.all.cbxSelectAll.checked = false;
		}
	}
}

/*
	color all rows when the main checkbox is clicked
*/
function checkAll(form,suffix)
{
	var thisNumRowsSelected = 0;
	var isChecked = document.all.cbxSelectAll.checked;
	
	for (var i=0; i < form.elements.length; i++)
	{
		if (form.elements[i].name.indexOf(suffix) > -1)
		{
		
			var curElement = form.elements[i];
			if (isChecked)
			{
				curElement.checked = true;
				thisNumRowsSelected = thisNumRowsSelected + 1;
				
				while (!(curElement.tagName == "TR"))
				{
					curElement = curElement.parentElement;
				}
				if (form.elements[i].name != "cbxSelectAll")
				{
					curElement.style.backgroundColor = "#FFD27A";
					curElement.style.color = "#000000";
				}
			}
		else
			{
				curElement.checked = false;
				while (!(curElement.tagName == "TR"))
				{
					curElement = curElement.parentElement;
				}
					if (form.elements[i].name != "cbxSelectAll")
				{
					curElement.style.backgroundColor = "FFFFFF";
					curElement.style.color = "#000000";
				}
			}
		}
	}
	rowsSelected = thisNumRowsSelected;
}


/*
	color all rows when the main checkbox is clicked
*/
function checkAllv2(form,suffix,cbxSelectAll)
{
	var thisNumRowsSelected = 0;
	var isChecked = document.getElementById(cbxSelectAll).checked;  //document.all.cbxSelectAll.checked;
	
	for (var i=0; i < form.elements.length; i++)
	{
		if (form.elements[i].name.indexOf(suffix) > -1)
		{
		
			var curElement = form.elements[i];
			if (isChecked)
			{
				curElement.checked = true;
				thisNumRowsSelected = thisNumRowsSelected + 1;
				
				while (!(curElement.tagName == "TR"))
				{
					curElement = curElement.parentElement;
				}
				if (form.elements[i].name != cbxSelectAll)
				{
					curElement.style.backgroundColor = "#FFD27A";
					curElement.style.color = "#000000";
				}
			}
		else
			{
				curElement.checked = false;
				while (!(curElement.tagName == "TR"))
				{
					curElement = curElement.parentElement;
				}
					if (form.elements[i].name != cbxSelectAll)
				{
					curElement.style.backgroundColor = "FFFFFF";
					curElement.style.color = "#000000";
				}
			}
		}
	}
	rowsSelected = thisNumRowsSelected;
}


/*	
	change the background color of a row when selected and also count how many rows are selected
*/
function colorRowv2(srcElement,cbxSelectAll)
{
	var cb = event.srcElement;	
	var curElement = cb;		
	
	while (curElement && !(curElement.tagName == "TR"))
	{
		curElement = curElement.parentElement;
	}
	
	if (!(curElement == cb) && (cb.name.indexOf(cbxSelectAll) == -1)) //(cb.name.indexOf("cbxSelectAll") == -1))    //(cb.name != "cbxSelectAll"))
	{
		if (cb.checked)
		{
			curElement.style.backgroundColor = "#FFD27A";
			curElement.style.color = "#000000";
			rowsSelected = rowsSelected + 1;
			//document.all.cbxSelectAll.checked = false;
			document.getElementById(cbxSelectAll).checked = false;
		}
		else
		{
			curElement.style.backgroundColor = "#FFFFFF";
			curElement.style.color = "#000000";
			rowsSelected = rowsSelected - 1;
			//document.all.cbxSelectAll.checked = false;
			document.getElementById(cbxSelectAll).checked = false;
		}
	}
}


/*
	Change Background color when selected according the original backgroung color before checked
*/
function colorRowv2Self(srcElement,colortext)
{
	var cb = event.srcElement;	
	var curElement = cb;		
	
	while (curElement && !(curElement.tagName == "TR"))
	{
		curElement = curElement.parentElement;
	}
	
	if (!(curElement == cb)) //&& (cb.name.indexOf(cbxSelectAll) == -1)) //(cb.name.indexOf("cbxSelectAll") == -1))    //(cb.name != "cbxSelectAll"))
	{
		if (cb.checked)
		{
			curElement.style.backgroundColor = "#FFD27A";
			curElement.style.color = "#000000";
			rowsSelected = rowsSelected + 1;
		}
		else
		{
			curElement.style.backgroundColor = colortext;
			curElement.style.color = "#000000";
			rowsSelected = rowsSelected - 1;
		}
	}
}

/*
	Change Background color when textbox is fill according the original backgroung color before fill
*/
function colorRowv2SelfText(srcElement,colortext)
{
	var cb = event.srcElement;	
	var curElement = cb;		
	
	while (curElement && !(curElement.tagName == "TR"))
	{
		curElement = curElement.parentElement;
	}
	
	if (!(curElement == cb)) //&& (cb.name.indexOf(cbxSelectAll) == -1)) //(cb.name.indexOf("cbxSelectAll") == -1))    //(cb.name != "cbxSelectAll"))
	{
		if (cb.value != "")
		{
			curElement.style.backgroundColor = "#FFD27A";
			curElement.style.color = "#000000";
			rowsSelected = rowsSelected + 1;
		}
		else
		{
			curElement.style.backgroundColor = colortext;
			curElement.style.color = "#000000";
			rowsSelected = rowsSelected - 1;
		}
	}
}