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
// D I A L O G   F U N C T I O N
//-----------------------------------------------------
// The following functions are used to show the 
// look-up screen.
//=====================================================

// look up screen for Status Lokasi

var urlbstlok='/fm_/search/s001.htm'; //status lokasi
var urlbgudang='/fm_/search/s002.htm'; //gudang
var urlbitem='/fm_/search/s003.htm'; //inventory item
var urlblnitm='/fm_/search/s004.htm'; //line item
var urlbnopesan='/fm_/search/s005.htm'; //no pesanan (po)
var urlbsupplier='/fm_/search/s006.htm'; //supplier
var urlbsatuan='/fm_/search/s007.htm'; //satuan
var urlbMarkup='/fm_/search/s008.htm'; //Mark Up
var urlbpenerimaan='/fm_/search/s009.htm'; //Penerimaan
var urlbpesanan='/fm_/search/s010.htm'; //Pesanan
var urlbcounterpsn='/fm_/search/s011.htm'; //Counter Pesanan
var urlbresep='/fm_/search/s012.htm'; //Resep
var urlbregistrasi='/fm_/search/s013.htm'; //RegistrasiFormat(cal.selectedDate, commonFunction.FORMAT_DATE)
var urlbdokter='/fm_/search/s014.htm'; //Dokter
var urlbdistribusi='/fm_/search/s015.htm'; //Nomor Distribusi
var urlbnoreturpemb='/fm_/search/s016.htm'; //Nomor Retur Pembelian
var urlbcounterterima='/fm_/search/s017.htm'; //Counter Penerimaan Barang
var urlbpenerimaanposting='/fm_/search/s018.htm'; //Penerimaan Setelah Posting
var urlbstockopname='/fm_/search/s019.htm'; //Stock Opname
var urlbpenyesuaian='/fm_/search/s020.htm'; //Penyesuaian
var urlbnotacredit='/fm_/search/s021.htm'; //Nota Credit
var urlbproduksi='/fm_/search/s022.htm'; //Nomor Produksi
var urlbvoucherfaktur='/fm_/search/s023.htm'; //Nomor Voucher Faktur
var urlbstokitem='/fm_/search/s024.htm'; //Item By Gudang and Supplier
var urlbperusahaan='/fm_/search/s025.htm'; //Perusahaan
var urlbpembcash='/fm_/search/s026.htm'; //Pembelian Cash
var urlbreturrsp='/fm_/search/s027.htm'; //Retur Resep
var urlbayarhutang='/fm_/search/s028.htm'; //Pembayaran Hutang
var urlbnoreturbysup='/fm_/search/s029.htm'; //Nomor Retur Pembelian By Supplier
var urlbsuppliersome='/fm_/search/s030.htm'; //Supplier PBF & Produsen
var urlbsuppliersp='/fm_/search/s031.htm'; //Supplier yang ada di PO
var urlbgudangall='/fm_/search/s032.htm'; //utk master gudang
var urlbitemall='/fm_/search/s033.htm'; //utk master inventory item
var urlbsupplierall='/fm_/search/s034.htm'; //utk master supplier
var urlbsupplierpbf='/fm_/search/s035.htm'; //Supplier PBF
var urlbsupplierprod='/fm_/search/s036.htm'; //Supplier Produsen
var urlbformula='/fm_/search/s037.htm'; //Formula
var urlbembalace='/fm_/search/s038.htm'; //Embalace
var urlbresepbebas='/fm_/search/s039.htm'; //Resep Bebas
var urlbbarangembl='/fm_/search/s040.htm'; //Barang Jenis Embalace
var urlbsuppliercnote='/fm_/search/s041.htm'; //Supplier Untuk Credit Note
var urlbsupplierrpemb='/fm_/search/s042.htm'; //Supplier Untuk Retur Pemb
var urlbpemakaianbrg='/fm_/search/s043.htm'; //Pemakaian Barang
var urlbdspurchase='/fm_/search/s044.htm'; //Distribusi Purchasing
var urlbgantiretur='/fm_/search/s045.htm'; //Penggantian Barang Retur
var urlbitemreturbynoretur='/fm_/search/s046.htm'; //Item Retur Per No Retur
var urlbtrkonsinyasi='/fm_/search/s047.htm'; //Penerimaan Konsinyasi
var urlbtfkonsinyasi='/fm_/search/s048.htm'; //Nomor Tukar Faktur Konsinyasi
var urlbkembalikonsinyasi='/fm_/search/s049.htm'; //Nomor Pengembalian Barang Konsinyasi
var urlzataktif='/fm_/search/s050.htm'; //Zat aktif

function ShowDialogStLokasi(ctrl)
{
	_sd(urlbstlok, ctrl);
}

// look up screen for Master Gudang
function ShowDialogGudangAll(ctrl)
{
	_sd(urlbgudangall, ctrl);
}

// look up screen for Gudang kalau disc tidak muncul
function ShowDialogGudang(ctrl)
{
	_sd(urlbgudang, ctrl);
}

// look up screen for Inventory Item kalau disc tidak muncul
function ShowDialogItem(ctrl)
{
	retVal=_sd(urlbitem, ctrl);
}

// look up screen for Master Inventory Item
function ShowDialogItemAll(ctrl,kd)
{
	_sd(urlbitemall+'?kdit='+kd,ctrl); 	
}

// look up screen for Line Item
function ShowDialogLineItem(ctrl)
{
	_sd(urlblnitm, ctrl);	
}

// look up screen for Pemesanan
function ShowDialogPemesanan(ctrl)
{
	_sd(urlbnopesan, ctrl);	
}

// look up screen for Supplier kalau disct tidak muncul
function ShowDialogSupplier(ctrl)
{
	_sd(urlbsupplier, ctrl);	
}

// look up screen for Master Supplier
function ShowDialogSupplierAll(ctrl)
{
	_sd(urlbsupplierall, ctrl);	
}

// look up screen for Supplier PBF & Produsen
function ShowDialogSupplierSome(ctrl)
{
	_sd(urlbsuppliersome, ctrl);	
}

// look up screen for Supplier yang ada PO
function ShowDialogSupplierSp(ctrl)
{
	_sd(urlbsuppliersp, ctrl);	
}

// look up screen for Supplier PBF 
function ShowDialogSupplierPBF(ctrl)
{
	_sd(urlbsupplierpbf, ctrl);	
}

// look up screen for Supplier Produsen 
function ShowDialogSupplierProd(ctrl)
{
	_sd(urlbsupplierprod, ctrl);	
}

// look up screen for Supplier Untuk Credit Note
function ShowDialogSupplierCNote(ctrl)
{
	_sd(urlbsuppliercnote, ctrl);	
}

// look up screen for Supplier Untuk Retur Pembelian
function ShowDialogSupplierRPemb(ctrl)
{
	_sd(urlbsupplierrpemb, ctrl);	
}

// look up screen for Satuan
function ShowDialogSatuan(ctrl)
{
	_sd(urlbsatuan, ctrl);
}

// look up screen for Markup
function ShowDialogMarkUp(ctrl)
{
	_sd(urlbMarkup, ctrl);
}

// look up screen for Pesanan by Supplier
function sDlgBrgByKdS(ctrl,sid)
{
	_sd(urlbcounterpsn+'?kds='+sid,ctrl)
}

// look up screen for Penerimaan
function ShowDialogPenerimaan(ctrl)
{
	_sd(urlbpenerimaan, ctrl);
}

// look up screen for Pesanan
function ShowDialogPesanan(ctrl)
{
	_sd(urlbpesanan, ctrl);
}

// look up screen for Counter Pesanan
function ShowDialogCounterPsn(ctrl)
{
	_sd(urlbcounterpsn, ctrl);
}

// look up screen for Resep
function ShowDialogResep(ctrl)
{
	_sd(urlbresep, ctrl);
}

// look up screen for Registrasi
function ShowDialogRegistrasi(ctrl,stgl)
{
	_sd(urlbregistrasi+'?tgl='+stgl,ctrl);
}

// look up screen for Dokter
function ShowDialogDokter(ctrl)
{
	_sd(urlbdokter, ctrl);
}

// look up screen for Distribusi
function ShowDialogDistribusi(ctrl)
{
	_sd(urlbdistribusi, ctrl);
}

// look up screen for Retur Pembelian
function ShowDialogReturPemb(ctrl)
{
	_sd(urlbnoreturpemb, ctrl);
}

function ShowDialogReturPByS(ctrl,sid)
{
	_sd(urlbnoreturbysup+'?kds='+sid,ctrl);
}

// look up screen for Counter Penerimaan Barang
function ShowDialogCounterTerima(ctrl,bid)
{
	_sd(urlbcounterterima+'?bpb='+bid,ctrl);
}

// look up screen for Penerimaan Setelah Posting
function ShowDialogPenerimaanPosting(ctrl,sid)
{
	_sd(urlbpenerimaanposting+'?kds='+sid,ctrl);
}

// look up screen for Stock Opname
function ShowDialogStockOpname(ctrl)
{
	_sd(urlbstockopname, ctrl);
}

// look up screen for Penyesuaian
function ShowDialogPenyesuaian(ctrl)
{
	_sd(urlbpenyesuaian, ctrl);
}

// look up screen for Nota Credit
function ShowDialogNotaCredit(ctrl)
{
	_sd(urlbnotacredit, ctrl);
}

// look up screen for Produksi
function ShowDialogProduksi(ctrl)
{
	_sd(urlbproduksi, ctrl);
}

// look up screen for Produksi
function ShowDialogVoucherFaktur(ctrl)
{
	_sd(urlbvoucherfaktur, ctrl);
}

// look up screen for Produksi
function ShowDialogVoucherFaktur(ctrl)
{
	_sd(urlbvoucherfaktur, ctrl);
}

// look up screen for Item By Gudang and Lokasi
function sDlgBrgByGL(ctrl,gid,lid)
{
	_sd(urlbstokitem+'?kdg='+gid+'&kdl='+lid,ctrl)
}

// look up screen for Perusahaan
function ShowDialogPerusahaan(ctrl)
{
	_sd(urlbperusahaan, ctrl);
}

// look up screen for Pembelian Cash
function ShowDialogPembBebas(ctrl)
{
	_sd(urlbpembcash, ctrl);
}

// look up screen for Pembelian Cash
function ShowDialogReturRsp(ctrl)
{
	_sd(urlbreturrsp, ctrl);
}

// look up screen for Pembayaran Hutang
function ShowDialogPembHutang(ctrl)
{
	_sd(urlbayarhutang, ctrl);
}

// look up screen for Formula
function ShowDialogFormula(ctrl)
{
	_sd(urlbformula, ctrl);
}

// look up screen for Embalace
function ShowDialogEmbalace(ctrl)
{
	_sd(urlbembalace, ctrl);
}

// look up screen for Resep Bebas
function ShowDialogRspBebas(ctrl)
{
	_sd(urlbresepbebas, ctrl);
}

// look up screen for Barang Jenis Embalace
function ShowDialogBarangEmbalace(ctrl)
{
	_sd(urlbbarangembl, ctrl);
}

// look up screen for Pemakaian Barang
function ShowDialogPemakaian(ctrl)
{
	_sd(urlbpemakaianbrg, ctrl);
}

// look up screen for Distribusi Purchasing menurut No. Penerimaan
function ShowDialogDsPurchase(ctrl,dsid)
{
	_sd(urlbdspurchase+'?kdds='+dsid,ctrl);
}

// look up screen for Penggantian Barang Retur
function ShowDialogGantiRetur(ctrl)
{
	_sd(urlbgantiretur, ctrl);
}

// look up screen for Item Retur Per NoRetur
function ShowDialogItemReturByNoRetur(ctrl,nort)
{
	_sd(urlbitemreturbynoretur+'?nort='+nort,ctrl);
}

// look up screen for Penerimaan Konsinyasi
function ShowDialogTrKonsinyasi(ctrl)
{
	_sd(urlbtrkonsinyasi,ctrl);
}

// look up screen for Tukar Faktur Konsinyasi
function ShowDialogTFKonsinyasi(ctrl)
{
	_sd(urlbtfkonsinyasi,ctrl);
}

// look up screen for Pengembalian Konsinyasi
function ShowDialogKembaliKonsinyasi(ctrl)
{
	_sd(urlbkembalikonsinyasi,ctrl);
}

function ShowDialogZatAktif(ctrl)
{
	_sd(urlzataktif, ctrl)	
}

// main function
function _sd(url,ctrl)
{
	var retval=window.showModalDialog(url,window,'dialogWidth: 900px; edge: Raised; center: Yes; help: No; resizable: Yes; status: No;');
	
	// if(retval!="" && retval!=null)
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

// per-cases function
function _sdSupplierropo(ctrl)
{
	var retval =
		window.showModalDialog(urlbsupplier,window,'dialogWidth: 900px; edge: Raised; center: Yes; help: No; resizable: Yes; status: No;');
	
	if(retval!=null)
	{
		try{
			ctrl.value = retval[1] + " [" + retval[0] + "]";
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

