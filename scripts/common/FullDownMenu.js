//----------------------------------------------
// Javascript untuk menjalankan menu Fulldown
// 2008 mas_ndon@yahoo.com
//-----------------------------------------------
var cswmOM = "document.all.";
var cswmBgCo = ".style.backgroundColor";
var cswmCo = ".style.color";
var cswmDi = ".style.display";
var cswmTI = "";
var cswmClkd = -1;
var cswmPI = new Array();
var cswmPx = new Array();
var cswmPy = new Array();
var cswmPW = 0;
var cswmPH = 0;
var cswmSPnt = "";
var cswmDir = "";
var cswmMB = 0;
var cswmSI = "";
var cswmSE = new Object();
var cswmSEL = 0;
var cswmSET = 0;
var cswmSEH = 0;
var cswmSEW = 0;
var cswmBW = 0;
var cswmBH = 0;
var cswmAR = 0;
var cswmAB = 0;
var cswmSLA = 0;
var cswmSTA = 0;
var cswmExIS = "/qpro_lib/images/menu_images/arrow-black.gif";
var cswmExdIS = "/qpro_lib/images/menu_images/arrow-yellow.gif";
var cswmCTH = 0;
var cswmXOff = 0;
var cswmYOff = 0;
var cswmFP = 0;
var cswmSH = false;
var cswmSTI = 0;
var cswmTS = 0;
var cswmTL = 0;
var cswmTTI = "";
function cswmT(ms)
{
    if (ms != "off")
    {
        if (cswmCTH == 0)
        {
            cswmTI = setTimeout("cswmFO(90);cswmClkd=-1;", ms);
        }
    }
    else
    {
        clearTimeout(cswmTI);
    }
}
function cswmST(l, g, i)
{
    if (i)
    {
        cswmHP(l);
        cswmSP(g, i);
    }
    else if (l)
    {
        cswmHP(l);
    }
}
function cswmShow(id, srcid, relpos, offsetX, offsetY, fixedpos)
{
    clearTimeout(cswmTI);
    if (cswmClkd != id)
    {
        cswmHP(0);
        cswmSI = srcid;
        cswmSPnt = relpos;
        cswmClkd = id;
        cswmDir = "right";
        if (document.getElementById("cswmPopup" + id))
        {
            if (offsetX) cswmXOff = offsetX;
            if (offsetY) cswmYOff = offsetY;
            if (fixedpos) cswmFP = fixedpos;
            cswmSP(id);
        }
    }
}
function cswmHide()
{
    cswmTI = setTimeout("cswmFO(90);cswmClkd=-1;", 200);
}
function cswmHiI(id, bgco)
{
    if (document.getElementById("cswmIcoOn" + id))
    {
        document.getElementById("cswmIco" + id).style.display = "none";
        document.getElementById("cswmIcoOn" + id).style.display = "inline";
    }
    document.getElementById("cswmItem" + id).style.color = "#ffffff";
    document.getElementById("cswmExpand" + id).style.color = "#ffffff";
    if (bgco != null)
    {
        document.getElementById("cswmItem" + id).style.backgroundColor = bgco;
        document.getElementById("cswmExpand" + id).style.backgroundColor = bgco;
    }
    else
    {
        document.getElementById("cswmItem" + id).style.backgroundColor = "#3E9DDA";
        document.getElementById("cswmExpand" + id).style.backgroundColor = "#3E9DDA";
    }
    if (document.getElementById("cswmExpandIc" + id))
    {
        document.getElementById("cswmExpandIc" + id).src = cswmExdIS;
    }
}
function cswmDiI(id, bgco)
{
    if (document.getElementById("cswmIcoOn" + id))
    {
        document.getElementById("cswmIco" + id).style.display = "inline";
        document.getElementById("cswmIcoOn" + id).style.display = "none";
    }
    document.getElementById("cswmItem" + id).style.color = "#ffffff";
    document.getElementById("cswmExpand" + id).style.color = "#ffffff";
    if (bgco != null)
    {
        document.getElementById("cswmItem" + id).style.backgroundColor = bgco;
        document.getElementById("cswmExpand" + id).style.backgroundColor = bgco;
    }
    else
    {
        document.getElementById("cswmItem" + id).style.backgroundColor = "#1A60A8";
        document.getElementById("cswmExpand" + id).style.backgroundColor = "#1A60A8";
    }
    if (document.getElementById("cswmExpandIc" + id))
    {
        document.getElementById("cswmExpandIc" + id).src = cswmExIS;
    }
}
function cswmHideSelectBox(boolHide, arrSelectList)
{
    if (navigator.platform != "MacPPC")
    {
        if (arrSelectList)
        {
            document.cswmSelects = new Array();
            var SelectID = new String();
            var iCount = 0;
            for (iCount = 0; iCount < arrSelectList.length; iCount++)
            {
                SelectID = arrSelectList[iCount];
                document.cswmSelects[iCount] = document.getElementById(SelectID);
            }
        }
        if (!document.cswmSelects)
        {
            document.cswmSelects = new Array();
        }
        if (boolHide == true && !cswmSH)
        {
            document.cswmSelects = new Array();
            var iCount = 0;
            var iCount2 = 0;
            var Selects = document.getElementsByTagName("select");
            for (iCount = 0; iCount < Selects.length; iCount++)
            {
                if (Selects[iCount].style.visibility != "hidden")
                {
                    document.cswmSelects[iCount2] = Selects[iCount];
                    iCount2++;
                }
            }
        }
        var iCount = 0;
        if (boolHide == true)
        {
            for (iCount = 0; iCount < document.cswmSelects.length; iCount++)
            {
                document.cswmSelects[iCount].style.visibility = "hidden";
            }
            cswmSH = true;
        }
        if (boolHide == false)
        {
            for (iCount = 0; iCount < document.cswmSelects.length; iCount++)
            {
                document.cswmSelects[iCount].style.visibility = "visible";
            }
            cswmSH = false;
        }
    }
}
function cswmSP(id, itemid)
{
    cswmHideSelectBox(true);
    if (!itemid)
    {
        clearTimeout(cswmTTI);
        if (cswmFP)
        {
            cswmSEL = cswmXOff;
            cswmSET = cswmYOff;
            cswmSEH = 1;
            cswmSEW = 1;
            cswmFP = 0;
        }
        else
        {
            if (!document.getElementById(cswmSI))
            {
                return;
            }
            cswmSE = new Object(document.getElementById(cswmSI));
            var cswmPrO = cswmSE;
            var cswmPrT = "";
            cswmSEL = cswmSE.offsetLeft + cswmXOff;
            cswmSET = cswmSE.offsetTop + cswmYOff;
            cswmSEH = cswmSE.offsetHeight;
            cswmSEW = cswmSE.offsetWidth;
            while (cswmPrT != "BODY")
            {
                cswmPrO = cswmPrO.offsetParent;
                cswmSEL += cswmPrO.offsetLeft;
                cswmSET += cswmPrO.offsetTop;
                cswmPrT = cswmPrO.tagName;
            }
            if (navigator.platform == "MacPPC")
            {
                cswmSEL += Number(document.body.leftMargin);
                cswmSET += Number(document.body.topMargin);
            }
        }
        document.getElementById("cswmPopup" + id).style.display = "block";
        cswmPW = document.getElementById("cswmPopup" + id).clientWidth;
        cswmPH = document.getElementById("cswmPopup" + id).clientHeight;
        cswmBW = document.body.clientWidth;
        cswmBH = document.body.clientHeight;
        cswmSLA = document.body.scrollLeft;
        cswmSTA = document.body.scrollTop;
        switch (cswmSPnt)
        {
            case "above":
                cswmPx[cswmPx.length] = cswmSEL;
                cswmPy[cswmPy.length] = cswmSET - cswmPH;
                cswmCA();
                cswmCR();
                break;
            case "below":
                cswmPx[cswmPx.length] = cswmSEL;
                cswmPy[cswmPy.length] = cswmSET + cswmSEH;
                cswmCB();
                cswmCR();
                break;
            case "right":
                cswmPx[cswmPx.length] = cswmSEL + cswmSEW;
                cswmPy[cswmPy.length] = cswmSET;
                cswmCR();
                cswmCB();
                break;
            case "left":
                cswmPx[cswmPx.length] = cswmSEL - cswmPW;
                cswmPy[cswmPy.length] = cswmSET;
                cswmCL();
                cswmCB();
                cswmDir = "left";
                break;
        }
        cswmXOff = 0;
        cswmYOff = 0;
        document.getElementById("cswmPopup" + id).style.left = cswmPx[cswmPx.length - 1];
        document.getElementById("cswmPopup" + id).style.top = cswmPy[cswmPy.length - 1];
        ;
        cswmPI[cswmPI.length] = id;
        if (cswmTS == 0)
        {
            cswmPR = new Object(eval(cswmOM + "cswmPopup" + id));
            cswmFI(20);
            cswmTS = 1;
        }
        else
        {
            eval(cswmOM + "cswmPopup" + id + ".style.filter=\"alpha(opacity=100\"");
        }
    }
    else
    {
        eval(cswmOM + "cswmPopup" + id + ".style.filter=\"alpha(opacity=100\"");
        cswmPx[cswmPx.length] = document.getElementById("cswmPopup" + cswmPI[cswmPI.length - 1]).clientWidth +
                                cswmPx[cswmPx.length - 1] - 4;
        var szPrE = "";
        if (document.getElementById("cswmItem" + itemid).parentElement.offsetTop == 0)
        {
            if (navigator.platform == "MacPPC")
            {
                var szPrE = "parentElement.parentElement.";
            }
            else if (
                document.getElementById("cswmItem" + itemid).parentElement.parentElement.parentElement.parentElement.
                    className != "cswmPopupBox")
            {
                var szPrE = "parentElement.parentElement.parentElement.";
            }
        }
        cswmPy[cswmPy.length] = eval(cswmOM + "cswmItem" + itemid + ".parentElement." + szPrE + "offsetTop") +
                                cswmPy[cswmPy.length - 1];
        document.getElementById("cswmPopup" + id).style.display = "block";
        cswmPW = document.getElementById("cswmPopup" + id).clientWidth;
        cswmPH = document.getElementById("cswmPopup" + id).clientHeight;
        var cswmPrW = document.getElementById("cswmPopup" + cswmPI[cswmPI.length - 1]).clientWidth;
        cswmAR = cswmBW - cswmPx[cswmPx.length - 1] + cswmSLA;
        cswmAB = cswmBH - cswmPy[cswmPy.length - 1] + cswmSTA;
        if (cswmPx[cswmPx.length - 2] == cswmSLA)
        {
            cswmDir = "right";
        }
        if ((cswmAR < cswmPW) || (cswmDir == "left"))
        {
            cswmMB = (cswmPx[cswmPx.length - 1] - cswmPW - cswmPrW) + 8;
            if ((cswmMB >= 0) && (cswmMB > cswmSLA))
            {
                cswmDir = "left";
            }
            else
            {
                cswmMB = cswmSLA;
            }
            cswmPx[cswmPx.length - 1] = cswmMB;
        }
        if (cswmAB < cswmPH)
        {
            cswmMB = cswmPy[cswmPy.length - 1] - (cswmPH - cswmAB);
            if (cswmMB < 0)
            {
                cswmMB = cswmSTA;
            }
            cswmPy[cswmPy.length - 1] = cswmMB;
        }
        document.getElementById("cswmPopup" + id).style.left = cswmPx[cswmPx.length - 1];
        document.getElementById("cswmPopup" + id).style.top = cswmPy[cswmPy.length - 1];
        cswmPI[cswmPI.length] = id;
    }
}
function cswmHP(level)
{
    if (level == 0)
    {
        cswmHideSelectBox(false);
    }
    var count = level;
    for (count = level; count < cswmPI.length; count++)
    {
        document.getElementById("cswmPopup" + cswmPI[count]).style.display = "none";
    }
    if (level == 0 && cswmPI.length > 0)
    {
    }
    cswmPI.length = level;
    cswmPx.length = level;
    cswmPy.length = level;
}
function cswmCR()
{
    cswmAR = (cswmBW + cswmSLA) - cswmPx[cswmPx.length - 1];
    if (cswmAR < cswmPW)
    {
        if (cswmSPnt == "below" || cswmSPnt == "above")
        {
            cswmMB = cswmPx[cswmPx.length - 1] - (cswmPW - cswmAR);
            if (cswmMB < 0 || cswmMB < cswmSLA)
            {
                cswmMB = cswmSLA;
            }
            cswmPx[cswmPx.length - 1] = cswmMB;
        }
        else
        {
            cswmMB = cswmSEL - cswmPW;
            if (cswmMB >= 0)
            {
                cswmPx[cswmPx.length - 1] = cswmMB;
            }
        }
    }
}
function cswmCL()
{
    if (cswmPx[cswmPx.length - 1] < (cswmSLA))
    {
        cswmPx[cswmPx.length - 1] = cswmSEL + cswmSEW;
        cswmCR();
    }
}
function cswmCB()
{
    cswmAB = (cswmBH + cswmSTA) - cswmPy[cswmPy.length - 1];
    if (cswmAB < cswmPH)
    {
        if (cswmSPnt == "below")
        {
            cswmMB = cswmPy[cswmPy.length - 1] - cswmPH - cswmSEH;
            if (cswmMB >= 0)
            {
                cswmPy[cswmPy.length - 1] = cswmMB;
            }
        }
        else
        {
            cswmMB = cswmPy[cswmPy.length - 1] - (cswmPH - cswmAB);
            if (cswmMB < 0 || cswmMB < cswmSTA)
            {
                cswmMB = cswmSTA;
            }
            cswmPy[cswmPy.length - 1] = cswmMB;
        }
    }
}
function cswmCA()
{
    if (cswmPy[cswmPy.length - 1] < (cswmSTA))
    {
        cswmPy[cswmPy.length - 1] = cswmSET + cswmSEH;
        cswmCB();
    }
}
function cswmFI(level)
{
    cswmTL = level;
    if (level <= 100)
    {
        cswmPR.style.filter = "alpha(opacity=" + cswmTL + ")";
        setTimeout("cswmFI(cswmTL+20);", 10);
    }
}
function cswmFO(level)
{
    cswmTL = level;
    cswmTS = 0;
    if (level >= 0)
    {
        var iCount = 0;
        for (iCount = 0; iCount < cswmPI.length; iCount++)
        {
            eval(cswmOM + "cswmPopup" + cswmPI[iCount] + ".style.filter=\"alpha(opacity=\"+cswmTL+\")\"");
        }
        cswmTTI = setTimeout("cswmFO(cswmTL-20);", 10);
    }
    else
    {
        cswmHP(0);
    }
}
function cswmShowInFrame(MenuID, x, y)
{
    x += document.body.scrollLeft;
    y += document.body.scrollTop;
    cswmShow(MenuID, '', 'below', x, y, 1);
}
function cswmRefresh()
{
}