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

// look up screen for Master Test
function showDialogTemplateM(ctrl)
{
	_sd(urlbTemplateM, ctrl);
}
// look up screen for Master Test
function showDialogTest(ctrl)
{
	_sd(urlbTest, ctrl);
}

// look up screen for Kelas
function showDialogKelas(ctrl)
{
	_sd(urlbKelas, ctrl);
}
// look up screen for Direktorat

function showDialogDirektorat(ctrl)
{
	_sd(urlbDirektorat, ctrl);
}
// look up screen for Bagian

function showDialogBagian(ctrl,kd)
{
	_sd(urlbBagian+'?kd='+kd, ctrl);
}
// look up screen for BagianSaja

function showDialogBagianWoDir(ctrl,kd)
{
	_sd(urlbBagianWoDir+'?kd='+kd, ctrl);	
}

// look up screen lamaran Not In Pegawai
function showDialogLamaranNIpeg(ctrl)
{
	
	_sd(urlbLamaranNIpeg, ctrl);
}

// look up screen lamaran 
function showDialogLamaran(ctrl)
{
	_sd(urlbLamaran, ctrl);
}

// look up screen Pegawai
function showDialogPegawai(ctrl)
{
	_sd(urlbPegawai, ctrl);
}

// look up screen Pegawai Aktif
function showDialogPegawaiAktif(ctrl)
{
	_sd(urlbPegawaiAktif, ctrl);
}

// look up screen Pegawai Berhenti
function showDialogPegawaiBerhenti(ctrl)
{
	_sd(urlbPegBerhenti, ctrl);
}

// look up screen Pegawai Per Bagian
function showDialogPegawaiPerBagian(ctrl,kd)
{
	_sd(urlbPegPerBag+'?kd='+kd, ctrl);
} 

// look up screen Keluarga Pegawai
function showDialogBerobat(ctrl,kd)
{
	_sd(urlbBerobat+'?kd='+kd, ctrl);
}

// look up screen poliklinik
function showDialogPoliklinik(ctrl)
{
	_sd(urlbPoliklinik, ctrl);
}

// look up screen ruang
function showDialogRuang(ctrl)
{
	_sd(urlbRuang, ctrl);
}

// look up screen Faktor Gaji
function showDialogFaktorGaji(ctrl)
{
	_sd(urlbFaktorGaji, ctrl);
}

// look up screen Faktor Gaji
function showDialogFaktorGajiNotLikeKdGaji(ctrl,kd)
{
	_sd(urlbFaktorGajiNotLikeKdGaji+'?kd='+kd, ctrl);
}

// look up screen Faktor THR
function showDialogFaktorTHRNotLikeKdTHR(ctrl,kd)
{
	_sd(urlbFaktorTHRNotLikeKdTHR+'?kd='+kd, ctrl);
}

// look up screen Faktor Pajak
function showDialogFaktorPajak(ctrl)
{
	_sd(urlbFaktorPajak, ctrl);
}

// look up screen Faktor THR
function showDialogFaktorTHR(ctrl)
{
	_sd(urlbFaktorTHR, ctrl);
}

// look up screen Faktor Pajak THR
function showDialogFaktorPajakTHR(ctrl)
{
	_sd(urlbFaktorPajakTHR, ctrl);
}

// look up screen for Profil
function showDialogProfil(ctrl)
{
	_sd(urlbProfil, ctrl);
} 
// look up screen for Profil Pendidikan
function showDialogProfilPendidikan(ctrl)
{
	_sd(urlbProfilPendidikan, ctrl);
}
// look up screen for Profil Tenaga
function showDialogProfilTenaga(ctrl)
{	
	_sd(urlbProfilTenaga, ctrl);
} 

// look up screen for Profil Pendidikan by kdgroup
function showDialogProfPendbyGroup(ctrl,kd)
{
	_sd(urlbProfPendbyGroup+'?kd='+kd, ctrl);
}
// look up screen for Profil Tenaga by kdgroup
function showDialogProfTngbyGroup(ctrl,kd)
{	
	_sd(urlbProfilTngbyGroup+'?kd='+kd, ctrl)
} 
// look up screen for Kode Pos
function showDialogKodePos(ctrl)
{
	_sd(urlbKodePos, ctrl);
} 
// look up screen for Pendidikan
function showDialogPendidikan(ctrl,kd)
{
	_sd(urlbPendidikan+'?kd='+kd, ctrl);
} 
// look up screen for Pendidikan tanpa Bidang

function showDialogPendidikanWoBid(ctrl)
{
	_sd(urlbPendidikanWoBid, ctrl);
} 

// look up screen for Skala Gaji

function showDialogSkalaGaji(ctrl,kd1,kd2)
{
	_sd(urlbSkalaGaji+'?kd1='+kd1+'&kd2='+kd2, ctrl);
} 
// look up screen for Golongan

function showDialogGolongan(ctrl)
{
	_sd(urlbGolongan, ctrl);
} 

// look up screen for Golongan by versi

function showDialogGolonganByVersi(ctrl,kd)
{
	_sd(urlbGolonganByVersi+'?kd='+kd, ctrl);
} 

// look up screen for Versi

function showDialogVersi(ctrl,kd)
{
	_sd(urlbVersi+'?kd='+kd, ctrl);
} 

// look up screen for versi2
function showDialogVersi2(ctrl)
{
	_sd(urlbVersi2, ctrl);
} 

// look up screen for Sebutan

function showDialogSebutan(ctrl,kd)
{
	_sd(urlbSebutan+'?kd='+kd, ctrl);
} 

//look up screen for Job Description
function showDialogJobDescription(ctrl)
{
	_sd(urlbJobdes, ctrl);
}
// look up screen for Jadwal Kerja

function showDialogJam(ctrl)
{
	_sd(urlbJam, ctrl);
} 

// look up screen for Jabatan

function showDialogJabatan(ctrl)
{
	_sd(urlbJabatan, ctrl);
} 

// look up screen for Jabatan Skala

function showDialogJabatanskala(ctrl,kd)
{
	_sd(urlbJabatanskala+'?kd='+kd, ctrl);
} 

// look up screen for Ipel / bobot

function showDialogIpel(ctrl)
{
	_sd(urlbIpel, ctrl);
} 

// look up screen for Bank

function showDialogBank(ctrl)
{
	_sd(urlbBank, ctrl);
}

// look up screen for Skala Staf
function showDialogSkalaStaf(ctrl)
{
	_sd(urlbSkalaStaf, ctrl);
}

// look up screen for Keluarga

function showDialogKeluarga(ctrl,kd)
{
	_sd(urlbKeluarga+'?kd='+kd, ctrl);
}

// look up screen for User Accounts
function showDialogUserAccounts(ctrl)
{
	_sd(urlbuseraccounts, ctrl);
}

// look up screen for Gudang
function showDialogGudang(ctrl)
{
	_sd(urlbgudang, ctrl);
}

// look up screen for Gudang Logistik
function showDialogGudangLog(ctrl)
{
	_sd(urlbgudanglog, ctrl);
}

// look up screen for Penunjang Medis
function showDialogPnjMedis(ctrl)
{
	_sd(urlbpnjmedis, ctrl);
}		

// look up screen for Evaluasi
function showDialogEvaluasi(ctrl)
{
	_sd(urlbevaluasi, ctrl);
}	

// look up screen for Pesangon
function showDialogPesangon(ctrl)
{
	_sd(urlbPesangon, ctrl);
}	

// look up screen for Penilaian
function showDialogPenilaian(ctrl,kd)
{
	_sd(urlbPenilaian+'?kd='+kd, ctrl);
}	

// look up screen for TFungsional

function showDialogTFungsional(ctrl)
{
	_sd(urlbTFungsional, ctrl);
} 

// look up screen for Medis

function ShowDialogMedis(ctrl)
{
	_sd(urlbMedis, ctrl);
}

// look up screen for Pasien - Aktif
function ShowDialogPasienAktif(ctrl)
{
	_sd(urlbpasienaktif, ctrl);
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