// look up screen for Penerimaan Non Stock

function ShowDialogGroupItem(ctrl)
{
	_sd(urlbGroupItem, ctrl);
}

function ShowDialogUnitBagian(ctrl)
{
	_sd(urlbUnitBagian, ctrl);
}

function ShowDialogPaviliun(ctrl)
{
	_sd(urlbPaviliun, ctrl);
}

// look up screen for Penerimaan Non Stock
function ShowDialogCabang(ctrl)
{
	_sd(urlbCabang, ctrl);
}

// look up screen for Penerimaan Non Stock
function ShowDialogPenerimaanNonStock(ctrl)
{
	_sd(urlbPenerimaanNonStock, ctrl);
}

// look up screen for Retur By Supplier For Credit Note
function ShowDialogReturPByS_ForCN(ctrl,sid)
{
	_sd(urlbnoreturbysupforcn+'?gp='+sid,ctrl);
}

// look up screen for Retur By Supplier
function ShowDialogReturPByS(ctrl,sid)
{
	_sd(urlbReturBySup+'?gp='+sid,ctrl);
}

// look up screen for Item Per Line Stock
function ShowDialogItemPerLineStock(ctrl,kdl)
{
	_sd(urlbItemPerLineStock+'?gp='+kdl, ctrl);
}

// look up screen for Item Per Line Non Stock
function ShowDialogItemPerLineNonStock(ctrl,kdl)
{
	_sd(urlbItemPerLineNonStock+'?gp='+kdl, ctrl);
}

// look up screen for Inventory Item kalau disc tidak muncul
function ShowDialogItemStock(ctrl)
{
	retVal=_sd(urlbItemStock, ctrl);
}

// look up screen for Inventory Item kalau disc tidak muncul
function ShowDialogItemNonStock(ctrl)
{
	retVal=_sd(urlbItemNonStock, ctrl);
}

// look up screen for Counter Rekanan
function ShowDialogCounterRekanan(ctrl)
{
	_sd(urlbCounterRekanan, ctrl);
}

// look up screen for Aktiva
function showDialogAktiva(ctrl)
{
	_sd(urlbAktiva, ctrl);
}

// look up screen for Service
function ShowDialogService(ctrl,bid)
{
	_sd(urlbService+'?kdj='+bid,ctrl);
}

// look up screen for transaksi penjualan ke rs
function ShowDialogPenjC(ctrl)
{
	_sd(urlbpenjualanc, ctrl);
}

function ShowDialogCustomer(ctrl)
{
	_sd(urlbCustomer, ctrl);
}

// look up screen for Retur Penjualan BP
function ShowDialogReturPenjC(ctrl)
{
	_sd(urlbnoreturpenjc, ctrl);
}

// look up screen for Customer Untuk Retur Penjualan BP
function ShowDialogCustomerRPenjC(ctrl)
{
	_sd(urlbcustomerrpenjc, ctrl);	
}

// look up screen for Penjualan BP Setelah Posting
function ShowDialogPenjCPosting(ctrl,sid)
{
	_sd(urlbpenjcposting+'?kds='+sid,ctrl);
}

// look up screen for Counter Penjualan BP
function ShowDialogCounterPenjC(ctrl,bid)
{
	_sd(urlbcounterpenjc+'?bpb='+bid,ctrl);
}

// look up screen for No Rencana Pemakaian
function ShowDialogRencanaPemakaian(ctrl)
{
	_sd(urlbRencanaPemakaian, ctrl);
}

// look up screen for No Permintaan Service
function ShowDialogNoBukti(ctrl)
{
	_sd(urlbNoBukti, ctrl);
}

// look up screen for No Permintaan Service Belum Proses
function ShowDialogNoBukti2(ctrl)
{
	_sd(urlbNoBukti2, ctrl);
}


function ShowDialogPermintaanService(ctrl)
{
	_sd(urlbpermintaanservice, ctrl);
}

// look up screen for Item Koreksi By NoBukti and NoPage
function ShowDialogItemKoreksi(ctrl,gid,lid)
{
	_sd(urlbitemkoreksi+'?nob='+gid+'&nop='+lid,ctrl)
}

// look up screen for Stock Opname New
function ShowDialogStockOpnameNew(ctrl)
{
	_sd(urlbstockopnameNew, ctrl);
}

// look up screen for No Service
function ShowDialogNoService(ctrl)
{
	_sd(urlbNoService, ctrl);
}

// look up screen for Supplier
function ShowDialogSupplier(ctrl)
{
	_sd(urlbSupplier, ctrl);
}

// look up screen for Supplier Aktif
function ShowDialogSupplierAktif(ctrl)
{
	_sd(urlbSupplierAktif, ctrl);
}

// look up screen for Supplier yang ada PO
function ShowDialogSupplierSP(ctrl)
{
	_sd(urlbSupplierSP, ctrl);
}

// look up screen for Supplier yang ada PO (Barang Non Stock)
function ShowDialogSupplierSPNonStock(ctrl)
{
	_sd(urlbSupplierSPNonStock, ctrl);
}

// look up screen for Supplier u/ retur pembelian
function ShowDialogSupplierRPemb(ctrl)
{
	_sd(urlbSupplierRPemb, ctrl);
}

// look up screen for Supplier Untuk Credit Note
function ShowDialogSupplierCNote(ctrl)
{
	_sd(urlbSupplierCnote, ctrl);	
}

// look up screen for Supplier u/ retur pembelian cash
function ShowDialogSupplierRPembCash(ctrl)
{
	_sd(urlbSupplierRPembCash, ctrl);
}

// look up screen for Bank
function ShowDialogBank(ctrl)
{
	_sd(urlbBank, ctrl);
}

// look up screen for Inventory Item kalau disc tidak muncul
function ShowDialogItem(ctrl)
{
	retVal=_sd(urlbItem, ctrl);
}

// look up screen for Master Inventory Item
function ShowDialogItemAll(ctrl)
{
	retVal=_sd(urlbItemAll, ctrl);
}

// look up screen for Gudang All
function ShowDialogGudangAll(ctrl)
{
	_sd(urlbGudangAll, ctrl);
}

// look up screen for Adjust
function ShowDialogAdjust(ctrl)
{
	_sd(urlbAdjust, ctrl);
}

// look up screen for Adjust
function ShowDialogStockOpname(ctrl)
{
	_sd(urlbOpname, ctrl);
}

// look up screen for Line
function ShowDialogLine(ctrl)
{
	_sd(urlbLine, ctrl);
}

// look up screen for Item
function ShowDialogItem(ctrl)
{
	_sd(urlbItem, ctrl);
}

// look up screen for Status Lokasi
function ShowDialogStatusLokasi(ctrl)
{
	_sd(urlbStatusLokasi, ctrl);
}

// look up screen for Mark Up
function ShowDialogMarkup(ctrl)
{
	_sd(urlbMarkup, ctrl);
}

// look up screen for Mark Up kelas
function ShowDialogMarkupKelas(ctrl)
{
	_sd(urlbMarkupKelas, ctrl);
}

// look up screen for Item By Gudang, Lokasi And Expired
function sDlgBrgByGLE(ctrl,gid,lid,bid)
{
	_sd(urlbstokitemexp+'?gid='+gid+'&lid='+lid+'&bid='+bid,ctrl)
}

// look up screen for Item Per Line
function ShowDialogItemPerLine(ctrl,kdl)
{
	_sd(urlbItemPerLine+'?gp='+kdl, ctrl);
}

// look up screen for Pemesanan (PO)
function ShowDialogPemesanan(ctrl)
{
	_sd(urlbPemesanan, ctrl);
}

// look up screen for Penerimaan
function ShowDialogPenerimaan(ctrl)
{
	_sd(urlbPenerimaan, ctrl);
}

// look up screen for Satuan
function ShowDialogSatuan(ctrl)
{
	_sd(urlbsatuan, ctrl);
}

// look up screen for Penerimaan yang sudah posting per Supplier
function ShowDialogPenerimaanPosting(ctrl,kds)
{
	_sd(urlbPenerimaanPost+'?gp='+kds, ctrl);
}

// look up screen for Retur Pembelian
function ShowDialogReturPembelian(ctrl)
{
	_sd(urlbReturPembelian, ctrl);
}

// look up screen for Permintaan Pembelian
function ShowDialogPermintaanPembelian(ctrl)
{
	_sd(urlbPermintaanBeli, ctrl);
}

// look up screen for Permintaan Barang
function ShowDialogPermintaanBarang(ctrl)
{
	_sd(urlbPermintaanBarang, ctrl);
}

// look up screen for Penggantian Barang Retur
function ShowDialogGantiRetur(ctrl)
{
	_sd(urlbGantiRetur, ctrl);
}

// look up screen for Item Retur Per NoRetur
function ShowDialogItemReturByNoRetur(ctrl,nort)
{
	_sd(urlbItemReturByNoRetur+'?gp='+nort,ctrl);
}

// look up screen for Nota Kredit
function ShowDialogNotaKredit(ctrl)
{
	_sd(urlbNotaKredit, ctrl);
}

// look up screen for Faktur
function ShowDialogFaktur(ctrl)
{
	_sd(urlbFaktur, ctrl);
}

// look up screen for Pembayaran Hutang
function ShowDialogPembayaranHutang(ctrl)
{
	_sd(urlbPembayaranHutang, ctrl);
}

// look up screen for Distribusi
function ShowDialogDistribusi(ctrl)
{
	_sd(urlbDistribusi, ctrl);
}

// look up screen for Gudang Aktif
function ShowDialogGudang(ctrl)
{
	_sd(urlbGudang, ctrl);
}

// look up screen for Item By Gudang, Lokasi 
function sDlgBrgByGL(ctrl,gid,lid)
{
	_sd(urlbBrgByGL+'?gid='+gid+'&lid='+lid,ctrl)
}

// look up screen for Pemakaian Barang
function ShowDialogPemakaian(ctrl)
{
	_sd(urlbPemakaian, ctrl);
}

// look up screen for Pembelian Cash
function ShowDialogPembelianCash(ctrl)
{
	_sd(urlbPembelianCash, ctrl);
}

// look up screen for Retur Pembelian Cash
function ShowDialogReturPembelianCash(ctrl)
{
	_sd(urlbReturPembelianCash, ctrl);
}

// look up screen for Pembelian Cash yang sudah posting per Supplier
function ShowDialogPembCashPosting(ctrl,kds)
{
	_sd(urlbPembCashPost+'?gp='+kds, ctrl);
}

// look up screen for Supplier Berdasarkan Matrik Item
function ShowDialogSupplierMatrikItem(ctrl,sid)
{
	_sd(urlbSupplierMatrikItem+'?kds='+sid,ctrl);
}

// look up screen for Produksi
function ShowDialogProduksi(ctrl)
{
	_sd(urlbProduksi, ctrl);
}

// look up screen for Formula
function ShowDialogFormula(ctrl)
{
	_sd(urlbFormula, ctrl);
}

// look up screen for Penerimaan Konsinyasi
function ShowDialogTrKonsinyasi(ctrl)
{
	_sd(urlbtrkonsinyasi, ctrl);
}

// look up screen for Pengembalian Konsinyasi
function ShowDialogKembaliKonsinyasi(ctrl)
{
	_sd(urlbkonsinyasiback, ctrl);
}

// look up screen for Tukar Faktur Konsinyasi
function ShowDialogTFKonsinyasi(ctrl)
{
	_sd(urlbtfkonsinyasi, ctrl);
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

function _sdSupplierropo(ctrl)
{
	var retval =
		window.showModalDialog(urlbSupplierAktif,window,'dialogWidth: 900px; edge: Raised; center: Yes; help: No; resizable: Yes; status: No;');
	
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

function _sdSupplierMatriksItem(ctrl, kdbarang)
{	
	var retval =
		window.showModalDialog(urlbSupplierMatrikItem+'?kds='+kdbarang,window,'dialogWidth: 900px; edge: Raised; center: Yes; help: No; resizable: Yes; status: No;');
	
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