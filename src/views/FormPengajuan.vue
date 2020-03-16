<template>
<div>
<h1>Pelayanan Pemberian izin Eskpor Barang yang akan Diimpor kembali (Ekspor Sementara)</h1>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui exercitationem quis, perspiciatis officiis minus architecto corporis aliquam est veniam omnis voluptatum nulla doloremque dolor? Odit recusandae dicta ratione voluptas quisquam totam quibusdam voluptatum facilis eos magnam voluptate perferendis nesciunt aperiam, magni repellat quidem earum architecto obcaecati placeat quasi blanditiis consectetur!</p>
<h3>Dokumen Pelengkap</h3>
<ul>
  <li>Asli Invoice</li>
  <li>Asli Packing List</li>
  <li>Asli Bukti Kontrak</li>
  <li>Asli Bukti Undangan (dalam hal ekspor tujuan pameran)</li>
</ul>

<h2>Rekam Dokumen</h2>

<b-row>
  <b-col>
    <b-form inline>
        <b-input-group class="mr-2 mb-2">
          <b-form-select placeholder="jenis Dokumen"
          v-model="form.jenisDokumen"
          :options="jenisDokumens"
          ></b-form-select>
        </b-input-group>
        <b-input-group class="mr-2 mb-2">
          <b-form-input placeholder="Nomor"></b-form-input>
        </b-input-group>
        <b-input-group class="mr-2 mb-2">
          <b-form-datepicker 
          placeholder="Tanggal" 
          :date-format-options="{ year: 'numeric', month: 'numeric', day: 'numeric' }" 
          ></b-form-datepicker>
        </b-input-group>
        <b-input-group class="mr-2 mb-2">
          <b-form-file placeholder=""></b-form-file>
        </b-input-group>

        <b-input-group class="mr-2 mb-2">
          <b-button variant="primary">Send</b-button>
        </b-input-group>

    </b-form>
  </b-col>
</b-row>
</div>
</template>

<script>
// @ is an alias to /src
export default {
  data() {
      return {
        form: {
          email: '',
          name: '',
          jenisDokumen: null,
          checked: []
        },
        jenisDokumens: [{ text: 'Pilih', value: null }, 'Invoice', 'Packinglist', 'Bukti Kontak', 'Bukti Undangan'],
        show: true
      }
    },
}
</script>
