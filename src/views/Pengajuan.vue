<template>
  <div>
    <Navbar></Navbar>
    <b-container class="mt-2" fluid>
      <Breadcrumb></Breadcrumb>
      <h1>Layanan Perizinan 1</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui exercitationem quis, perspiciatis officiis minus architecto corporis aliquam est veniam omnis voluptatum nulla doloremque dolor? Odit recusandae dicta ratione voluptas quisquam totam quibusdam voluptatum facilis eos magnam voluptate perferendis nesciunt aperiam, magni repellat quidem earum architecto obcaecati placeat quasi blanditiis consectetur!</p>

      <h2>Dokumen Pelengkap</h2>

      <ul>
        <li><p>Dokumen pelengkap A</p>
            <b-form inline>
            <label class="sr-only" for="inline-form-input-name">Nomor</label>
            <b-input
                id="inline-form-input-name"
                class="mb-2 mr-sm-2 mb-sm-0"
                placeholder="Nomor"
            ></b-input>

            <label class="sr-only" for="inline-form-input-username">Tanggal</label>
            <b-form-datepicker id="datepicker-placeholder" placeholder="Tanggal" local="en"></b-form-datepicker>

             <b-form-group label="File:" label-for="file-default" label-cols-sm="2">
                <b-form-file id="file-default"></b-form-file>
            </b-form-group>

            <b-button variant="primary" class="ml-3">Save</b-button>
            </b-form>
        </li>
        <li class="mt-3"><p>Dokumen pelengkap B</p>
            <b-form inline>
            <label class="sr-only" for="inline-form-input-name">Nomor</label>
            <b-input
                id="inline-form-input-name"
                class="mb-2 mr-sm-2 mb-sm-0"
                placeholder="Nomor"
            ></b-input>

            <label class="sr-only" for="inline-form-input-username">Tanggal</label>
            <b-form-datepicker id="datepicker-placeholder" placeholder="Tanggal" local="en"></b-form-datepicker>

             <b-form-group label="File:" label-for="file-default" label-cols-sm="2">
                <b-form-file id="file-default"></b-form-file>
            </b-form-group>

            <b-button variant="primary" class="ml-3">Save</b-button>
            </b-form>
        </li>
        <li class="mt-3"><p>Dokumen pelengkap C</p>
            <b-form inline>
            <label class="sr-only" for="inline-form-input-name">Nomor</label>
            <b-input
                id="inline-form-input-name"
                class="mb-2 mr-sm-2 mb-sm-0"
                placeholder="Nomor"
            ></b-input>

            <label class="sr-only" for="inline-form-input-username">Tanggal</label>
            <b-form-datepicker id="datepicker-placeholder" placeholder="Tanggal" local="en"></b-form-datepicker>

             <b-form-group label="File:" label-for="file-default" label-cols-sm="2">
                <b-form-file id="file-default"></b-form-file>
            </b-form-group>

            <b-button variant="primary" class="ml-3">Save</b-button>
            </b-form>
        </li>
      </ul>
    </b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue"
import Breadcrumb from "@/components/Breadcrumb.vue"
export default {
  name: 'pengajuan',
  components: {
    Navbar,
    Breadcrumb
  }
}
</script>
