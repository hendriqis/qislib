' *********************************************************************************
' *                                                                               *
' *    (c) Copyright 1997-2002 QPro Sukses Mandiri, Pt.  All rights reserved.     *
' *    This material is proprietary to QPro Sukses Mandiri, PT. and may not be    *
' *    used, distributed or reproduced in any form or by an means without         *
' *    written expression from QPro Sukses Mandiri, Pt.  Any use, distribution    *
' *    or reproduction in any form or by any means without written permission     *
' *    QPro Sukses Mandiri, Pt. is a violation of federal copyright laws     	  *
' *    and international treaties.  Terms of use.                                 *
' *                                                                               *
' *********************************************************************************

'=====================================================
' T Y P E   C O N V E R S I O N   F U N C T I O N S
'-----------------------------------------------------
' The following functions are usually used to convert
' variants to explicit data types.  Unlike the regular
' VBScript functions, these functions will gracefully
' convert Nulls and other irregular values without
' causing an error.
'=====================================================
Public Function StrVal(ByVal Expr)
	Dim p
	
    On Error Resume Next
    StrVal = CStr(Expr)
    If Err Then StrVal = ""
    Err.Clear
    
End Function

Public Function IntVal(ByVal Expr)

    On Error Resume Next
    IntVal = CInt(Expr)
    If Err Then IntVal = CInt(0)
    Err.Clear
    
End Function

Public Function LngVal(ByVal Expr)

    On Error Resume Next
    LngVal = CLng(Expr)
    If Err Then LngVal = CLng(0)
    Err.Clear
    
End Function

Public Function SngVal(ByVal Expr)

    On Error Resume Next
    SngVal = CSng(Expr)
    If Err Then SngVal = CSng(0.0)
    Err.Clear
    
End Function

Public Function DblVal(ByVal Expr)

    On Error Resume Next
    DblVal = CDbl(Expr)
    If Err Then DblVal = CDbl(0.0)
    Err.Clear
    
End Function

Public Function CurVal(ByVal Expr)

    On Error Resume Next
    CurVal = CCur(Expr)
    If Err Then CurVal = CCur(0.00)
    Err.Clear
    
End Function

Public Function FmtCur(ByVal Expr)

    On Error Resume Next
    FmtCur = Replace(FormatCurrency(Expr),"$","")    
    If Err Then Fmt = FormatCurrency(0.00)
    Err.Clear
    
End Function

Public Function DateVal(ByVal Expr, ByVal DefaultVal)

    On Error Resume Next
    DateVal = CDate(Expr)
    If Err Then DateVal = DefaultVal
    Err.Clear
    
End Function

Public Function BlnVal(ByVal Expr, ByVal DefaultVal)

    On Error Resume Next
    BlnVal = CBool(Expr)
    If Err Then BlnVal = DefaultVal
    Err.Clear
    
End Function

Public Function delpx(ByVal Expr)

	On Error Resume Next
	delpx = left(Expr,Len(Expr)-2)
	If Err Then del = ""
	Err.Clear
	
End Function 

Public Function ditrim(ByVal x)
	ditrim = Trim(x)			
End Function			

'========================================
' Common Window/Document Event Handlers
'========================================

'-
' Try to gracefully handle any errors that occur.
'-
Sub window_onerror

	MsgBox "The following unexpected error occured:" & vbCrLf & Err.description
	window.event.returnValue = False

End Sub

sub window_onload
	on error resume next
	
	window.moveTo 0, 0
	window.resizeTo screen.availWidth, screen.availHeight
	
end sub

'-
' Call the appropriate help topic for the currently
' loaded page, and disable browser help.
'-
Sub document_onhelp

    On Error Resume Next
    
    window.event.returnValue = False
    
End Sub

'-
' Disable the browser's built-in context menus.
'-
Sub document_oncontextmenu

    On Error Resume Next
	window.event.returnValue = False
	
End Sub

