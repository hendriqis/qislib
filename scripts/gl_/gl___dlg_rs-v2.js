// *********************************************************************************
// *                                                                               *
// *    (c) Copyright 1997-2002 QPro Sukses Mandiri, Pt.  All rights reserved.     *
// *    This material is proprietary to QPro Sukses Mandiri, PT. and may not be    *
// *    used, distributed or reproduced in any form or by an means without         *
// *    written expression from QPro Sukses Mandiri, Pt.  Any use, distribution    *
// *    or reproduction in any form or by any means without written permission     *
// *    QPro Sukses Mandiri, Pt. is a violation of federal copyright laws     	   *
// *    and international treaties.  Terms of use.                                 *
// *                                                                               *
// *********************************************************************************

//=====================================================
// D I A L O G   F U N C T I O N  // Ver: 2.0
//-----------------------------------------------------
// The following functions are used to show the 
// look-up screen.
//=====================================================

// look up screen for TransNo
function showDialogSalesTransaction(ctrl)
{
	_sd(urlbSalesTransaction, ctrl);
}

// look up screen for Customer
function showDialogSalesCustomer(ctrl)
{
	_sd(urlbSalesCustomer, ctrl);
}

// look up screen for Lokasi Fixed Asset
function showDialogLokasi(ctrl)
{
	_sd(urlbLokasi, ctrl);
}

// SubLedger Berdasarkan Group
function showDialogSubLedgerByGroup(ctrl,kdgroup)
{
	_sd(urlbSubLedgerByGroup+'?kdgroup='+kdgroup, ctrl);
}

// look up screen for SubLedger Berdasarkan Group dari kdCoa
function showDialogSubLedgerByGroupCoa(ctrl,kdc)
{
	_sd(urlbSubLedgerByGroupCoa+'?kdc='+kdc, ctrl);
}


// look up screen for COA
function showDialogNopek(ctrl)
{
	_sd(urlbNopek, ctrl);
}

// look up screen for COA Detail
function showDialogNopekDetil(ctrl)
{
	_sd(urlbNopekDetil, ctrl);
}

// look up screen for Alokasi
function showDialogAlokasi(ctrl)
{
	_sd(urlbAlokasi, ctrl);
}

// look up screen for SubLedger-Group
function showDialogSubLedgerGroup(ctrl)
{
	_sd(urlbSubLedgerGroup, ctrl);
}

// look up screen for SubLedger
function showDialogSubLedger(ctrl)
{
	_sd(urlbSubLedger, ctrl);
}

// look up screen for Metode Fixed Asset
function showDialogMetode(ctrl)
{
	_sd(urlbMetode, ctrl);
}

// look up screen for Buku Fixed Asset
function showDialogBuku(ctrl)
{
	_sd(urlbBuku, ctrl);
}

// look up screen for Kelompok Fixed Asset
function showDialogKelompokFa(ctrl)
{
	_sd(urlbKelompokFA, ctrl);
}

// look up screen for Aktiva
function showDialogAktiva(ctrl)
{
	_sd(urlbAktiva, ctrl);
}

// look up screen for Jurnal
function showDialogJurnal(ctrl)
{
	_sd(urlbJurnal, ctrl);
}

// look up screen for Nomor Transaksi
function showDialogNoTransaksi(ctrl)
{
	_sd(urlbNoTransaksi, ctrl);
}

// Nomor Transaksi berdasarkan kode jurnal
function showDialogNoTransaksiByKdj(ctrl,kdj)
{
	_sd(urlbNoTransaksiByKdj+'?kdj='+kdj, ctrl);
}

// look up screen for Nomor Transaksi berdasarkan TypeJurnal dan Kode Jurnal
function showDialogNoTransaksiByTpjKdj(ctrl, tpj, kdj)
{
	_sd(urlbNoTransaksiByTpjKdj+'?tpj='+tpj+'&kdj='+kdj, ctrl);
} 

// Kode Jurnal berdasarkan Tipe jurnal
function showDialogKdjByTypeJurnal(ctrl,typeJurnal)
{
	_sd(urlbKdjByTypeJurnal+'?typeJurnal='+typeJurnal, ctrl);
}

// No_Dokumen Berdasarkan Nopek
function showDialogNoDokumenByNopek(ctrl,nopek)
{
	_sd(urlbNoDokumenByNopek+'?nopek='+nopek, ctrl);
}

// look up screen for Nomor Dokumen berdasarkan Nopek dan SubLedger
function showDialogNoDokumenByNopekSubL(ctrl, nopek, kdsubledger)
{
	_sd(urlbNoDokumenByNopekSubL+'?nopek='+nopek+'&kdsubledger='+kdsubledger, ctrl);
} 

// look up screen for Users
function showDialogUsers(ctrl)
{
	_sd(urlbUsers, ctrl);
}

// look up screen for Nomor Transaksi Piutang Kartu Kredit
function showDialogNoTransaksiARCARD(ctrl)
{
	_sd(urlbNoTransaksiARCARD, ctrl);
}

// look up screen for Intansi
function showDialogInstansi(ctrl)
{
	_sd(urlbInstansi, ctrl);
}

// look up screen for Intansi
function showDialogInstansiPribadi(ctrl)
{
	_sd(urlbInstansiPribadi, ctrl);
}

// look up screen for bagian dari karyawan
function showDialogBagian(ctrl)
{
	_sd(urlbBagian, ctrl);
}

// look up screen for Kode Matrix (Matrix Definisi Laporan)
function showDialogKodeMatrix(ctrl)
{
	_sd(urlbKodeMatrix, ctrl);
}

// look up screen for Instansi BP (Balai Pengobatan) FM
function ShowDialogCustomerAll(ctrl)
{
	_sd(urlbcustomerall, ctrl);
}

// look up screen for Definisi Perincian Buku Besar
function showDialogDefBukuBesar(ctrl)
{
	_sd(urlbDefBukuBesar, ctrl);
}

// look up screen for Definisi Perincian Sub Ledger
function showDialogDefSubLedger(ctrl)
{
	_sd(urlbDefSubLedger, ctrl);
}

// look up screen for Definisi Perincian Nomor Dokumen
function showDialogDefNoDokumen(ctrl)
{
	_sd(urlbDefNoDokumen, ctrl);
}

// look up screen for Definisi Neraca dan Laba/(Rugi)
function showDialogDefNeracaLR(ctrl)
{
	_sd(urlbDefNeracaLR, ctrl);
}

// main function
function _sd(url,ctrl)
{
	var isReadOnly=document.getElementById(ctrl).getAttribute("readOnly");
	var isDisabled=document.getElementById(ctrl).getAttribute("disabled");
	if (isReadOnly==true||isDisabled==true)
	{
		alert('Cannot currently modify this field, it is read-only.');
		window.event.returnValue=false;
	}
	else
	{
		var retval=window.showModalDialog(url,window,'dialogWidth: 900px; edge: Raised; center: Yes; help: No; resizable: Yes; status: No;');
		if(retval!=null)
		{
			try{
					document.getElementById(ctrl).value=retval[0];
					return retval;
				}
			catch(e){
						window.event.returnValue=false;
					}
		}
		else
		{
			window.event.returnValue=false;
		}
	}
}