<script lang="ts" setup>
import { AppConfigInput } from '@nuxt/schema'
import { Icon } from '@iconify/vue'

const props = defineProps<{
  form?: any
}>()

const { social } = useAppData()
const app = useAppConfig() as AppConfigInput
</script>

<template>
  <div
    id="wrapper"
    style="box-sizing: border-box; padding: 0; margin: 0; margin-bottom: 0"
  >
    <table
      class="wrapper-table text-gray-900"
      cellspacing="0"
      cellpadding="0"
      border="0"
      width="100%"
      style="
        background-color: #f6f6f6;
        box-sizing: border-box;
        empty-cells: hide;
        line-height: normal;
        margin: 0;
        padding: 0;
        width: 100%;
      "
    >
      <tr>
        <td style="padding: 20px">
          <table
            border="0"
            cellpadding="0"
            cellspacing="0"
            height="100%"
            align="center"
            width="100%"
            style="margin: 0; background-color: #f6f6f6; background-image: none"
            bgcolor="#f6f6f6"
          >
            <tr style="box-sizing: border-box; line-height: normal">
              <td
                align="center"
                valign="top"
                style="
                  box-sizing: border-box;
                  font-family: Arial, Helvetica, sans-serif;
                  line-height: normal;
                  margin: 0 auto;
                "
              >
                <!-- Gmail Wrapper start-->
                <table
                  class="content-table"
                  cellpadding="0"
                  cellspacing="0"
                  width="600"
                  style="
                    box-sizing: border-box;
                    empty-cells: hide;
                    line-height: normal;
                    margin: 0;
                    padding: 0;
                    width: 600px;
                  "
                >
                  <tbody style="box-sizing: border-box; line-height: normal">
                    <!-- Main Content block start-->
                    <tr style="box-sizing: border-box; line-height: normal">
                      <td
                        valign="top"
                        align="center"
                        style="box-sizing: border-box; line-height: normal"
                      >
                        <!-- Hero block / white block contentarea start-->
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          border="0"
                          width="100%"
                          style="
                            box-sizing: border-box;
                            empty-cells: hide;
                            line-height: normal;
                            margin: 0;
                            padding: 0;
                          "
                        >
                          <tbody
                            style="box-sizing: border-box; line-height: normal"
                          >
                            <tr
                              style="
                                box-sizing: border-box;
                                line-height: normal;
                              "
                            >
                              <td
                                class="pt-mob-15 spacer"
                                valign="top"
                                align="center"
                                style="
                                  box-sizing: border-box;
                                  font-size: 1px !important;
                                  line-height: 1px !important;
                                  mso-line-height-rule: exactly;
                                  padding-top: 20px;
                                "
                              >
                                &nbsp;
                              </td>
                            </tr>
                            <!-- Rounded white block top start-->
                            <!-- Rounded white block top end-->
                            <!-- Rounded white block content start-->
                            <tr
                              style="
                                box-sizing: border-box;
                                line-height: normal;
                              "
                            >
                              <td
                                align="center"
                                valign="middle"
                                bgcolor="#ffffff"
                                style="
                                  border-radius: 8px;
                                  box-sizing: border-box;
                                  line-height: normal;
                                "
                              >
                                <table
                                  class="contents"
                                  cellpadding="0"
                                  cellspacing="0"
                                  border="0"
                                  width="88.3333333%"
                                  align="center"
                                  style="
                                    box-sizing: border-box;
                                    empty-cells: hide;
                                    line-height: normal;
                                    margin: 0;
                                    padding: 0;
                                  "
                                >
                                  <tbody
                                    style="
                                      box-sizing: border-box;
                                      line-height: normal;
                                    "
                                  >
                                    <!-- Spacer 20 start-->
                                    <tr
                                      style="
                                        box-sizing: border-box;
                                        line-height: normal;
                                      "
                                    >
                                      <td
                                        class="spacer"
                                        valign="top"
                                        align="center"
                                        style="
                                          box-sizing: border-box;
                                          font-size: 1px !important;
                                          line-height: 1px !important;
                                          mso-line-height-rule: exactly;
                                          padding-top: 20px;
                                        "
                                      >
                                        &nbsp;
                                      </td>
                                    </tr>
                                    <!-- Spacer 20 end-->
                                    <!-- Company logo start-->
                                    <tr
                                      style="
                                        box-sizing: border-box;
                                        line-height: normal;
                                      "
                                    >
                                      <td
                                        align="center"
                                        valign="middle"
                                        style="
                                          box-sizing: border-box;
                                          line-height: normal;
                                        "
                                      >
                                        <table
                                          cellpadding="0"
                                          cellspacing="0"
                                          border="0"
                                          width="35%"
                                          align="center"
                                          style="
                                            box-sizing: border-box;
                                            empty-cells: hide;
                                            line-height: normal;
                                            margin: 0;
                                            padding: 0;
                                          "
                                        >
                                          <tr
                                            style="
                                              box-sizing: border-box;
                                              line-height: normal;
                                            "
                                          >
                                            <td
                                              align="center"
                                              valign="middle"
                                              style="
                                                box-sizing: border-box;
                                                line-height: normal;
                                              "
                                            >
                                              <img
                                                class="imgfull"
                                                src="https://d1oco4z2z1fhwp.cloudfront.net/templates/default/7191/HR-logo-company.png"
                                                alt="Plus"
                                                style="
                                                  border: 0;
                                                  box-sizing: border-box;
                                                  display: block;
                                                  line-height: normal;
                                                  vertical-align: sub;
                                                "
                                              />
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                    <!-- Company logo end-->
                                    <!-- Spacer 30/20 start-->
                                    <tr
                                      style="
                                        box-sizing: border-box;
                                        line-height: normal;
                                      "
                                    >
                                      <td
                                        class="pt-mob-20 spacer"
                                        valign="top"
                                        align="center"
                                        style="
                                          box-sizing: border-box;
                                          font-size: 1px !important;
                                          line-height: 1px !important;
                                          mso-line-height-rule: exactly;
                                          padding-top: 30px;
                                        "
                                      >
                                        &nbsp;
                                      </td>
                                    </tr>
                                    <!-- Spacer 30/20 end-->
                                    <!-- Hero banner start-->
                                    <tr
                                      style="
                                        box-sizing: border-box;
                                        line-height: normal;
                                      "
                                    >
                                      <td
                                        valign="top"
                                        align="center"
                                        style="
                                          box-sizing: border-box;
                                          line-height: normal;
                                        "
                                      >
                                        <img
                                          class="imgfull"
                                          src="https://images.unsplash.com/photo-1558449028-b53a39d100fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                                          alt="Hero Banner"
                                          style="
                                            border: 0;
                                            box-sizing: border-box;
                                            display: block;
                                            line-height: normal;
                                            vertical-align: sub;
                                            width: 100%;
                                            height: auto;
                                          "
                                        />
                                      </td>
                                    </tr>
                                    <!-- Hero banner end-->
                                    <!-- Spacer 20 start-->
                                    <tr
                                      style="
                                        box-sizing: border-box;
                                        line-height: normal;
                                      "
                                    >
                                      <td
                                        class="spacer"
                                        valign="top"
                                        style="
                                          box-sizing: border-box;
                                          font-size: 1px !important;
                                          line-height: 1px !important;
                                          mso-line-height-rule: exactly;
                                        "
                                        height="20"
                                      >
                                        &nbsp;
                                      </td>
                                    </tr>
                                    <!-- Spacer 20 end-->
                                    <tr
                                      style="
                                        box-sizing: border-box;
                                        line-height: normal;
                                      "
                                    >
                                      <td
                                        class="text-center fallback-font fz-mob-24"
                                        valign="top"
                                        align="center"
                                        style="
                                          box-sizing: border-box;
                                          font-family: Arial, Helvetica,
                                            sans-serif;
                                          font-size: 32px;
                                          font-weight: bold;
                                          line-height: normal;
                                          margin: 0 auto;
                                        "
                                      >
                                        Hey {{ form.name || 'There' }}!
                                        <br />
                                        we have some useful information.
                                      </td>
                                    </tr>
                                    <!-- spacer 15 start-->
                                    <tr
                                      style="
                                        box-sizing: border-box;
                                        line-height: normal;
                                      "
                                    >
                                      <td
                                        class="spacer"
                                        valign="top"
                                        style="
                                          box-sizing: border-box;
                                          font-size: 1px !important;
                                          line-height: 1px !important;
                                          mso-line-height-rule: exactly;
                                        "
                                        height="15"
                                      >
                                        &nbsp;
                                      </td>
                                    </tr>
                                    <!-- spacer 15 end-->
                                    <tr
                                      style="
                                        box-sizing: border-box;
                                        line-height: normal;
                                      "
                                    >
                                      <td
                                        class="text-center fz-mob-16"
                                        valign="top"
                                        align="center"
                                        style="
                                          box-sizing: border-box;
                                          color: #6c6c6c;
                                          font-family: Arial, Helvetica,
                                            sans-serif;
                                          font-size: 18px;
                                          line-height: normal;
                                          margin: 0 auto;
                                        "
                                      >
                                        Here's some important information about
                                        our company.
                                      </td>
                                    </tr>
                                    <!-- spacer 15 start-->
                                    <tr
                                      style="
                                        box-sizing: border-box;
                                        line-height: normal;
                                      "
                                    >
                                      <td
                                        class="spacer"
                                        valign="top"
                                        style="
                                          box-sizing: border-box;
                                          font-size: 1px !important;
                                          line-height: 1px !important;
                                          mso-line-height-rule: exactly;
                                        "
                                        height="15"
                                      >
                                        &nbsp;
                                      </td>
                                    </tr>
                                    <!-- spacer 15 end-->
                                    <!-- big blue cta start-->
                                    <tr
                                      style="
                                        box-sizing: border-box;
                                        line-height: normal;
                                      "
                                    >
                                      <td
                                        align="center"
                                        style="
                                          box-sizing: border-box;
                                          color: #ffffff;
                                          font-family: Arial;
                                          font-size: 16px;
                                          line-height: normal;
                                          margin: 0 auto;
                                        "
                                        valign="middle"
                                      >
                                        <table
                                          width="190"
                                          border="0"
                                          cellspacing="0"
                                          cellpadding="0"
                                          align="center"
                                          style="
                                            box-sizing: border-box;
                                            empty-cells: hide;
                                            line-height: normal;
                                            margin: 0;
                                            padding: 0;
                                          "
                                        >
                                          <tr
                                            style="
                                              box-sizing: border-box;
                                              line-height: normal;
                                            "
                                          >
                                            <td
                                              class="text-center"
                                              style="
                                                border-radius: 8px;
                                                box-sizing: border-box;
                                                color: #ffffff;
                                                font-family: Arial;
                                                font-size: 18px;
                                                font-weight: bold;
                                                line-height: normal;
                                                margin: 0 auto;
                                              "
                                              bgcolor="#075985"
                                              valign="middle"
                                              align="center"
                                            >
                                              <a
                                                style="
                                                  -moz-border-radius: 8px;
                                                  -webkit-border-radius: 8px;
                                                  background-color: #075985;
                                                  border: 0px solid #075985;
                                                  border-radius: 8px;
                                                  box-sizing: border-box;
                                                  color: #ffffff;
                                                  display: block;
                                                  font-family: Arial, Helvetica,
                                                    sans-serif;
                                                  font-size: 18px;
                                                  font-weight: bold;
                                                  line-height: normal;
                                                  margin: 0;
                                                  padding-bottom: 15px;
                                                  padding-left: 10px;
                                                  padding-right: 10px;
                                                  padding-top: 15px;
                                                  text-decoration: none;
                                                "
                                                href="https://www.samplelink.com"
                                                target="_blank"
                                                >Learn more</a
                                              >
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                    <!-- big blue cta end-->
                                    <!-- spacer 20 start-->
                                    <tr
                                      style="
                                        box-sizing: border-box;
                                        line-height: normal;
                                      "
                                    >
                                      <td
                                        class="pt-mob-20 spacer"
                                        valign="top"
                                        align="center"
                                        style="
                                          box-sizing: border-box;
                                          font-size: 1px !important;
                                          line-height: 1px !important;
                                          mso-line-height-rule: exactly;
                                          padding-top: 20px;
                                        "
                                      >
                                        &nbsp;
                                      </td>
                                    </tr>
                                    <!-- spacer 20 end-->
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <!-- Rounded white block content end-->
                            <!-- Rounded white block bottom start-->
                            <!-- Rounded white block bottom end-->
                            <tr
                              style="
                                box-sizing: border-box;
                                line-height: normal;
                              "
                            >
                              <td
                                class="pt-mob-15 spacer"
                                valign="top"
                                align="center"
                                style="
                                  box-sizing: border-box;
                                  font-size: 1px !important;
                                  line-height: 1px !important;
                                  mso-line-height-rule: exactly;
                                  padding-top: 20px;
                                "
                              >
                                &nbsp;
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <!-- Hero block / white block contentarea end-->
                        <!-- White block five contentarea start-->
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          border="0"
                          width="100%"
                          style="
                            box-sizing: border-box;
                            empty-cells: hide;
                            line-height: normal;
                            margin: 0;
                            padding: 0;
                          "
                        >
                          <tbody
                            style="box-sizing: border-box; line-height: normal"
                          >
                            <!-- Spacer 40/25 start-->
                            <tr
                              style="
                                box-sizing: border-box;
                                line-height: normal;
                              "
                            >
                              <td
                                class="pt-mob-25 spacer"
                                valign="top"
                                align="center"
                                style="
                                  box-sizing: border-box;
                                  font-size: 1px !important;
                                  line-height: 1px !important;
                                  mso-line-height-rule: exactly;
                                  padding-top: 40px;
                                "
                              >
                                &nbsp;
                              </td>
                            </tr>
                            <!-- Spacer 40/25 end-->
                            <!-- Rounded white block content start-->
                            <tr
                              style="
                                box-sizing: border-box;
                                line-height: normal;
                              "
                            >
                              <td
                                align="center"
                                valign="middle"
                                bgcolor="#ffffff"
                                style="
                                  border-radius: 8px;
                                  box-sizing: border-box;
                                  line-height: normal;
                                "
                              >
                                <table
                                  class="contents"
                                  cellpadding="0"
                                  cellspacing="0"
                                  border="0"
                                  width="530"
                                  align="center"
                                  style="
                                    box-sizing: border-box;
                                    empty-cells: hide;
                                    line-height: normal;
                                    margin: 0;
                                    padding: 0;
                                  "
                                >
                                  <tbody
                                    style="
                                      box-sizing: border-box;
                                      line-height: normal;
                                    "
                                  >
                                    <!-- Spacer 20 start-->
                                    <tr
                                      style="
                                        box-sizing: border-box;
                                        line-height: normal;
                                      "
                                    >
                                      <td
                                        class="spacer"
                                        valign="top"
                                        style="
                                          box-sizing: border-box;
                                          font-size: 1px !important;
                                          line-height: 1px !important;
                                          mso-line-height-rule: exactly;
                                        "
                                        height="20"
                                      >
                                        &nbsp;
                                      </td>
                                    </tr>
                                    <!-- Spacer 20 end-->
                                    <!-- block heading start-->
                                    <tr
                                      style="
                                        box-sizing: border-box;
                                        line-height: normal;
                                      "
                                    >
                                      <td
                                        align="center"
                                        valign="middle"
                                        style="
                                          box-sizing: border-box;
                                          line-height: normal;
                                        "
                                      >
                                        <table
                                          cellpadding="0"
                                          cellspacing="0"
                                          border="0"
                                          width
                                          align="center"
                                          style="
                                            box-sizing: border-box;
                                            empty-cells: hide;
                                            line-height: normal;
                                            margin: 0;
                                            padding: 0;
                                          "
                                        >
                                          <tbody
                                            style="
                                              box-sizing: border-box;
                                              line-height: normal;
                                            "
                                          >
                                            <tr
                                              style="
                                                box-sizing: border-box;
                                                line-height: normal;
                                              "
                                            >
                                              <td
                                                width="10"
                                                align="left"
                                                valign="middle"
                                                style="
                                                  box-sizing: border-box;
                                                  line-height: normal;
                                                "
                                              >
                                                <img
                                                  src="images/001-multicolor-heading-decor-left.png"
                                                  alt=""
                                                  style="
                                                    border: 0;
                                                    box-sizing: border-box;
                                                    display: block;
                                                    line-height: normal;
                                                    vertical-align: sub;
                                                  "
                                                />
                                              </td>
                                              <td
                                                class="text-center fz-mob-22"
                                                align="center"
                                                valign="middle"
                                                style="
                                                  box-sizing: border-box;
                                                  font-family: Arial, Helvetica,
                                                    sans-serif;
                                                  font-size: 25px;
                                                  font-weight: bold;
                                                  line-height: normal;
                                                  margin: 0 auto;
                                                  padding-left: 5px;
                                                  padding-right: 5px;
                                                "
                                              >
                                                Lorem ipsum dolor sit amet con
                                              </td>
                                              <td
                                                width="10"
                                                align="right"
                                                valign="middle"
                                                style="
                                                  box-sizing: border-box;
                                                  line-height: normal;
                                                "
                                              >
                                                <img
                                                  src="images/001-multicolor-heading-decor-right.png"
                                                  alt=""
                                                  style="
                                                    border: 0;
                                                    box-sizing: border-box;
                                                    display: block;
                                                    line-height: normal;
                                                    vertical-align: sub;
                                                  "
                                                />
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                    <!-- block heading end-->
                                    <!-- Spacer 20 start-->
                                    <tr
                                      style="
                                        box-sizing: border-box;
                                        line-height: normal;
                                      "
                                    >
                                      <td
                                        class="spacer"
                                        valign="top"
                                        style="
                                          box-sizing: border-box;
                                          font-size: 1px !important;
                                          line-height: 1px !important;
                                          mso-line-height-rule: exactly;
                                        "
                                        height="20"
                                      >
                                        &nbsp;
                                      </td>
                                    </tr>
                                    <!-- Spacer 20 end-->
                                    <tr
                                      style="
                                        box-sizing: border-box;
                                        line-height: normal;
                                      "
                                    >
                                      <td
                                        valign="top"
                                        align="center"
                                        style="
                                          box-sizing: border-box;
                                          font-family: Arial, Helvetica,
                                            sans-serif;
                                          line-height: normal;
                                          margin: 0 auto;
                                        "
                                      >
                                        <table
                                          class="full"
                                          cellpadding="0"
                                          cellspacing="0"
                                          border="0"
                                          width="530"
                                          align="center"
                                          style="
                                            box-sizing: border-box;
                                            empty-cells: hide;
                                            line-height: normal;
                                            margin: 0;
                                            padding: 0;
                                          "
                                        >
                                          <tbody
                                            style="
                                              box-sizing: border-box;
                                              line-height: normal;
                                            "
                                          >
                                            <tr
                                              style="
                                                box-sizing: border-box;
                                                line-height: normal;
                                              "
                                            >
                                              <td
                                                class="text-center coldrop"
                                                width="250"
                                                align="center"
                                                valign="top"
                                                style="
                                                  box-sizing: border-box;
                                                  line-height: normal;
                                                "
                                              >
                                                <!-- Promo eight contentarea start-->
                                                <table
                                                  cellpadding="0"
                                                  cellspacing="0"
                                                  border="0"
                                                  width="100%"
                                                  align="center"
                                                  style="
                                                    box-sizing: border-box;
                                                    empty-cells: hide;
                                                    line-height: normal;
                                                    margin: 0;
                                                    padding: 0;
                                                  "
                                                >
                                                  <tbody
                                                    style="
                                                      box-sizing: border-box;
                                                      line-height: normal;
                                                    "
                                                  >
                                                    <tr
                                                      style="
                                                        box-sizing: border-box;
                                                        line-height: normal;
                                                      "
                                                    >
                                                      <td
                                                        valign="middle"
                                                        align="center"
                                                        style="
                                                          box-sizing: border-box;
                                                          line-height: normal;
                                                        "
                                                      >
                                                        <img
                                                          class="rounded-8 imgfull"
                                                          src="images/001-promo-placeholder-04.png"
                                                          alt=""
                                                          style="
                                                            border: 0;
                                                            box-sizing: border-box;
                                                            display: block;
                                                            line-height: normal;
                                                            vertical-align: sub;
                                                          "
                                                        />
                                                      </td>
                                                    </tr>
                                                    <tr
                                                      style="
                                                        box-sizing: border-box;
                                                        line-height: normal;
                                                      "
                                                    >
                                                      <td
                                                        valign="top"
                                                        align="center"
                                                        style="
                                                          box-sizing: border-box;
                                                          line-height: normal;
                                                        "
                                                      >
                                                        <table
                                                          cellpadding="0"
                                                          cellspacing="0"
                                                          border="0"
                                                          width="100%"
                                                          align="center"
                                                          style="
                                                            box-sizing: border-box;
                                                            empty-cells: hide;
                                                            line-height: normal;
                                                            margin: 0;
                                                            padding: 0;
                                                            padding-left: 10px;
                                                            padding-right: 10px;
                                                          "
                                                        >
                                                          <tr
                                                            style="
                                                              box-sizing: border-box;
                                                              line-height: normal;
                                                            "
                                                          >
                                                            <td
                                                              class="spacer"
                                                              valign="top"
                                                              style="
                                                                box-sizing: border-box;
                                                                font-size: 1px !important;
                                                                line-height: 1px !important;
                                                                mso-line-height-rule: exactly;
                                                              "
                                                              height="20"
                                                            >
                                                              &nbsp;
                                                            </td>
                                                          </tr>
                                                          <tr
                                                            style="
                                                              box-sizing: border-box;
                                                              line-height: normal;
                                                            "
                                                          >
                                                            <td
                                                              valign="top"
                                                              align="center"
                                                              style="
                                                                box-sizing: border-box;
                                                                font-family: Arial,
                                                                  Helvetica,
                                                                  sans-serif;
                                                                font-size: 14px;
                                                                font-weight: bold;
                                                                line-height: normal;
                                                                margin: 0 auto;
                                                                mso-line-height-rule: exactly;
                                                              "
                                                            >
                                                              Lorem ipsum
                                                            </td>
                                                          </tr>
                                                          <tr
                                                            style="
                                                              box-sizing: border-box;
                                                              line-height: normal;
                                                            "
                                                          >
                                                            <td
                                                              class="spacer"
                                                              valign="top"
                                                              style="
                                                                box-sizing: border-box;
                                                                font-size: 1px !important;
                                                                line-height: 1px !important;
                                                                mso-line-height-rule: exactly;
                                                              "
                                                              height="5"
                                                            >
                                                              &nbsp;
                                                            </td>
                                                          </tr>
                                                          <tr
                                                            style="
                                                              box-sizing: border-box;
                                                              line-height: normal;
                                                            "
                                                          >
                                                            <td
                                                              valign="top"
                                                              align="center"
                                                              style="
                                                                box-sizing: border-box;
                                                                font-family: Arial,
                                                                  Helvetica,
                                                                  sans-serif;
                                                                font-size: 14px;
                                                                line-height: normal;
                                                                margin: 0 auto;
                                                              "
                                                            >
                                                              Lorem ipsum dolor
                                                              sit amet,
                                                              consectetur
                                                              adipiscing elit.
                                                              Morbi porta ex a
                                                              placerat
                                                              vulputate. Nam
                                                              risus elit,
                                                              blandit ac elit
                                                              at, malesuada
                                                              maximus.
                                                            </td>
                                                          </tr>
                                                          <tr
                                                            style="
                                                              box-sizing: border-box;
                                                              line-height: normal;
                                                            "
                                                          >
                                                            <td
                                                              class="spacer"
                                                              valign="top"
                                                              style="
                                                                box-sizing: border-box;
                                                                font-size: 1px !important;
                                                                line-height: 1px !important;
                                                                mso-line-height-rule: exactly;
                                                              "
                                                              height="15"
                                                            >
                                                              &nbsp;
                                                            </td>
                                                          </tr>
                                                          <tr
                                                            style="
                                                              box-sizing: border-box;
                                                              line-height: normal;
                                                            "
                                                          >
                                                            <td
                                                              valign="top"
                                                              align="center"
                                                              style="
                                                                box-sizing: border-box;
                                                                font-family: Arial,
                                                                  Helvetica,
                                                                  sans-serif;
                                                                font-size: 14px;
                                                                font-weight: bold;
                                                                line-height: normal;
                                                                margin: 0 auto;
                                                                mso-line-height-rule: exactly;
                                                              "
                                                            >
                                                              <a
                                                                href="https://www.samplelink.com"
                                                                target="_blank"
                                                                style="
                                                                  box-sizing: border-box;
                                                                  color: inherit;
                                                                  font-family: Arial,
                                                                    Helvetica,
                                                                    sans-serif;
                                                                  font-size: 14px;
                                                                  font-weight: bold;
                                                                  line-height: normal;
                                                                  margin: 0;
                                                                  text-decoration: none;
                                                                "
                                                                >Hyperlink
                                                                here</a
                                                              >
                                                            </td>
                                                          </tr>
                                                        </table>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                                <!-- Promo eight contentarea end-->
                                              </td>
                                              <td
                                                class="coldrop spacer"
                                                valign="top"
                                                align="center"
                                                width="30"
                                                height="30"
                                                style="
                                                  box-sizing: border-box;
                                                  font-size: 1px !important;
                                                  line-height: 1px !important;
                                                  mso-line-height-rule: exactly;
                                                "
                                              >
                                                &nbsp;
                                              </td>
                                              <td
                                                class="text-center coldrop"
                                                width="250"
                                                align="center"
                                                valign="top"
                                                style="
                                                  box-sizing: border-box;
                                                  line-height: normal;
                                                "
                                              >
                                                <!-- Promo nine contentarea start-->
                                                <table
                                                  cellpadding="0"
                                                  cellspacing="0"
                                                  border="0"
                                                  width="100%"
                                                  align="center"
                                                  style="
                                                    box-sizing: border-box;
                                                    empty-cells: hide;
                                                    line-height: normal;
                                                    margin: 0;
                                                    padding: 0;
                                                  "
                                                >
                                                  <tbody
                                                    style="
                                                      box-sizing: border-box;
                                                      line-height: normal;
                                                    "
                                                  >
                                                    <tr
                                                      style="
                                                        box-sizing: border-box;
                                                        line-height: normal;
                                                      "
                                                    >
                                                      <td
                                                        valign="middle"
                                                        align="center"
                                                        style="
                                                          box-sizing: border-box;
                                                          line-height: normal;
                                                        "
                                                      >
                                                        <img
                                                          class="rounded-8 imgfull"
                                                          src="images/001-promo-placeholder-04.png"
                                                          alt=""
                                                          style="
                                                            border: 0;
                                                            box-sizing: border-box;
                                                            display: block;
                                                            line-height: normal;
                                                            vertical-align: sub;
                                                          "
                                                        />
                                                      </td>
                                                    </tr>
                                                    <tr
                                                      style="
                                                        box-sizing: border-box;
                                                        line-height: normal;
                                                      "
                                                    >
                                                      <td
                                                        valign="top"
                                                        align="center"
                                                        style="
                                                          box-sizing: border-box;
                                                          line-height: normal;
                                                        "
                                                      >
                                                        <table
                                                          cellpadding="0"
                                                          cellspacing="0"
                                                          border="0"
                                                          width="100%"
                                                          align="center"
                                                          style="
                                                            box-sizing: border-box;
                                                            empty-cells: hide;
                                                            line-height: normal;
                                                            margin: 0;
                                                            padding: 0;
                                                            padding-left: 10px;
                                                            padding-right: 10px;
                                                          "
                                                        >
                                                          <tr
                                                            style="
                                                              box-sizing: border-box;
                                                              line-height: normal;
                                                            "
                                                          >
                                                            <td
                                                              class="spacer"
                                                              valign="top"
                                                              style="
                                                                box-sizing: border-box;
                                                                font-size: 1px !important;
                                                                line-height: 1px !important;
                                                                mso-line-height-rule: exactly;
                                                              "
                                                              height="20"
                                                            >
                                                              &nbsp;
                                                            </td>
                                                          </tr>
                                                          <tr
                                                            style="
                                                              box-sizing: border-box;
                                                              line-height: normal;
                                                            "
                                                          >
                                                            <td
                                                              valign="top"
                                                              align="center"
                                                              style="
                                                                box-sizing: border-box;
                                                                font-family: Arial,
                                                                  Helvetica,
                                                                  sans-serif;
                                                                font-size: 14px;
                                                                font-weight: bold;
                                                                line-height: normal;
                                                                margin: 0 auto;
                                                                mso-line-height-rule: exactly;
                                                              "
                                                            >
                                                              Lorem ipsum
                                                            </td>
                                                          </tr>
                                                          <tr
                                                            style="
                                                              box-sizing: border-box;
                                                              line-height: normal;
                                                            "
                                                          >
                                                            <td
                                                              class="spacer"
                                                              valign="top"
                                                              style="
                                                                box-sizing: border-box;
                                                                font-size: 1px !important;
                                                                line-height: 1px !important;
                                                                mso-line-height-rule: exactly;
                                                              "
                                                              height="5"
                                                            >
                                                              &nbsp;
                                                            </td>
                                                          </tr>
                                                          <tr
                                                            style="
                                                              box-sizing: border-box;
                                                              line-height: normal;
                                                            "
                                                          >
                                                            <td
                                                              valign="top"
                                                              align="center"
                                                              style="
                                                                box-sizing: border-box;
                                                                font-family: Arial,
                                                                  Helvetica,
                                                                  sans-serif;
                                                                font-size: 14px;
                                                                line-height: normal;
                                                                margin: 0 auto;
                                                              "
                                                            >
                                                              Lorem ipsum dolor
                                                              sit amet,
                                                              consectetur
                                                              adipiscing elit.
                                                              Morbi porta ex a
                                                              placerat
                                                              vulputate. Nam
                                                              risus elit,
                                                              blandit ac elit
                                                              at, malesuada
                                                              maximus.
                                                            </td>
                                                          </tr>
                                                          <tr
                                                            style="
                                                              box-sizing: border-box;
                                                              line-height: normal;
                                                            "
                                                          >
                                                            <td
                                                              class="spacer"
                                                              valign="top"
                                                              style="
                                                                box-sizing: border-box;
                                                                font-size: 1px !important;
                                                                line-height: 1px !important;
                                                                mso-line-height-rule: exactly;
                                                              "
                                                              height="15"
                                                            >
                                                              &nbsp;
                                                            </td>
                                                          </tr>
                                                          <tr
                                                            style="
                                                              box-sizing: border-box;
                                                              line-height: normal;
                                                            "
                                                          >
                                                            <td
                                                              valign="top"
                                                              align="center"
                                                              style="
                                                                box-sizing: border-box;
                                                                font-family: Arial,
                                                                  Helvetica,
                                                                  sans-serif;
                                                                font-size: 14px;
                                                                font-weight: bold;
                                                                line-height: normal;
                                                                margin: 0 auto;
                                                                mso-line-height-rule: exactly;
                                                              "
                                                            >
                                                              <a
                                                                href="https://www.samplelink.com"
                                                                target="_blank"
                                                                style="
                                                                  box-sizing: border-box;
                                                                  color: inherit;
                                                                  font-family: Arial,
                                                                    Helvetica,
                                                                    sans-serif;
                                                                  font-size: 14px;
                                                                  font-weight: bold;
                                                                  line-height: normal;
                                                                  margin: 0;
                                                                  text-decoration: none;
                                                                "
                                                                >Hyperlink
                                                                here</a
                                                              >
                                                            </td>
                                                          </tr>
                                                        </table>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                                <!-- Promo nine contentarea end-->
                                              </td>
                                            </tr>
                                            <!-- Spacer 20 start-->
                                            <tr
                                              style="
                                                box-sizing: border-box;
                                                line-height: normal;
                                              "
                                            >
                                              <td
                                                class="spacer"
                                                valign="top"
                                                style="
                                                  box-sizing: border-box;
                                                  font-size: 1px !important;
                                                  line-height: 1px !important;
                                                  mso-line-height-rule: exactly;
                                                "
                                                height="20"
                                              >
                                                &nbsp;
                                              </td>
                                            </tr>
                                            <!-- Spacer 20 end-->
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <!-- Rounded white block content end-->
                            <!-- Spacer 40/25 start-->
                            <tr
                              style="
                                box-sizing: border-box;
                                line-height: normal;
                              "
                            >
                              <td
                                class="pt-mob-25 spacer"
                                valign="top"
                                align="center"
                                style="
                                  box-sizing: border-box;
                                  font-size: 1px !important;
                                  line-height: 1px !important;
                                  mso-line-height-rule: exactly;
                                  padding-top: 40px;
                                "
                              >
                                &nbsp;
                              </td>
                            </tr>
                            <!-- Spacer 40/25 end-->
                          </tbody>
                        </table>
                        <!-- White block five contentarea end-->
                        <!-- White block six contentarea start-->
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          border="0"
                          width="100%"
                          style="
                            box-sizing: border-box;
                            empty-cells: hide;
                            line-height: normal;
                            margin: 0;
                            padding: 0;
                          "
                        >
                          <tbody
                            style="box-sizing: border-box; line-height: normal"
                          >
                            <!-- Rounded white block content start-->
                            <tr
                              style="
                                box-sizing: border-box;
                                line-height: normal;
                              "
                            >
                              <td
                                align="center"
                                valign="middle"
                                bgcolor="#ffffff"
                                style="
                                  border-radius: 8px;
                                  box-sizing: border-box;
                                  line-height: normal;
                                "
                              >
                                <table
                                  class="contents"
                                  cellpadding="0"
                                  cellspacing="0"
                                  border="0"
                                  width="530"
                                  align="center"
                                  style="
                                    box-sizing: border-box;
                                    empty-cells: hide;
                                    line-height: normal;
                                    margin: 0;
                                    padding: 0;
                                  "
                                >
                                  <tbody
                                    style="
                                      box-sizing: border-box;
                                      line-height: normal;
                                    "
                                  >
                                    <!-- Spacer 20 start-->
                                    <tr
                                      style="
                                        box-sizing: border-box;
                                        line-height: normal;
                                      "
                                    >
                                      <td
                                        class="spacer"
                                        valign="top"
                                        style="
                                          box-sizing: border-box;
                                          font-size: 1px !important;
                                          line-height: 1px !important;
                                          mso-line-height-rule: exactly;
                                        "
                                        height="20"
                                      >
                                        &nbsp;
                                      </td>
                                    </tr>
                                    <!-- Spacer 20 end-->
                                    <!-- block heading start-->
                                    <tr
                                      style="
                                        box-sizing: border-box;
                                        line-height: normal;
                                      "
                                    >
                                      <td
                                        align="center"
                                        valign="middle"
                                        style="
                                          box-sizing: border-box;
                                          line-height: normal;
                                        "
                                      >
                                        <table
                                          cellpadding="0"
                                          cellspacing="0"
                                          border="0"
                                          width
                                          align="center"
                                          style="
                                            box-sizing: border-box;
                                            empty-cells: hide;
                                            line-height: normal;
                                            margin: 0;
                                            padding: 0;
                                          "
                                        >
                                          <tbody
                                            style="
                                              box-sizing: border-box;
                                              line-height: normal;
                                            "
                                          >
                                            <tr
                                              style="
                                                box-sizing: border-box;
                                                line-height: normal;
                                              "
                                            >
                                              <td
                                                width="10"
                                                align="left"
                                                valign="middle"
                                                style="
                                                  box-sizing: border-box;
                                                  line-height: normal;
                                                "
                                              >
                                                <img
                                                  src="images/001-multicolor-heading-decor-left.png"
                                                  alt=""
                                                  style="
                                                    border: 0;
                                                    box-sizing: border-box;
                                                    display: block;
                                                    line-height: normal;
                                                    vertical-align: sub;
                                                  "
                                                />
                                              </td>
                                              <td
                                                class="text-center fz-mob-22"
                                                align="center"
                                                valign="middle"
                                                style="
                                                  box-sizing: border-box;
                                                  font-family: Arial, Helvetica,
                                                    sans-serif;
                                                  font-size: 25px;
                                                  font-weight: bold;
                                                  line-height: normal;
                                                  margin: 0 auto;
                                                  padding-left: 5px;
                                                  padding-right: 5px;
                                                "
                                              >
                                                Lorem ipsum dolor sit amet con
                                              </td>
                                              <td
                                                width="10"
                                                align="right"
                                                valign="middle"
                                                style="
                                                  box-sizing: border-box;
                                                  line-height: normal;
                                                "
                                              >
                                                <img
                                                  src="images/001-multicolor-heading-decor-right.png"
                                                  alt=""
                                                  style="
                                                    border: 0;
                                                    box-sizing: border-box;
                                                    display: block;
                                                    line-height: normal;
                                                    vertical-align: sub;
                                                  "
                                                />
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                    <!-- block heading end-->
                                    <!-- Spacer 20 start-->
                                    <tr
                                      style="
                                        box-sizing: border-box;
                                        line-height: normal;
                                      "
                                    >
                                      <td
                                        class="spacer"
                                        valign="top"
                                        style="
                                          box-sizing: border-box;
                                          font-size: 1px !important;
                                          line-height: 1px !important;
                                          mso-line-height-rule: exactly;
                                        "
                                        height="20"
                                      >
                                        &nbsp;
                                      </td>
                                    </tr>
                                    <!-- Spacer 20 end-->
                                    <tr
                                      style="
                                        box-sizing: border-box;
                                        line-height: normal;
                                      "
                                    >
                                      <td
                                        valign="top"
                                        align="center"
                                        style="
                                          box-sizing: border-box;
                                          line-height: normal;
                                        "
                                      >
                                        <table
                                          class="full"
                                          cellpadding="0"
                                          cellspacing="0"
                                          border="0"
                                          width="530"
                                          align="center"
                                          style="
                                            box-sizing: border-box;
                                            empty-cells: hide;
                                            line-height: normal;
                                            margin: 0;
                                            padding: 0;
                                          "
                                        >
                                          <tbody
                                            style="
                                              box-sizing: border-box;
                                              line-height: normal;
                                            "
                                          >
                                            <tr
                                              style="
                                                box-sizing: border-box;
                                                line-height: normal;
                                              "
                                            >
                                              <td
                                                class="text-center"
                                                align="center"
                                                valign="top"
                                                style="
                                                  box-sizing: border-box;
                                                  line-height: normal;
                                                "
                                              >
                                                <!-- Article section 01 contentarea start-->
                                                <table
                                                  cellpadding="0"
                                                  cellspacing="0"
                                                  border="0"
                                                  width="100%"
                                                  align="center"
                                                  style="
                                                    box-sizing: border-box;
                                                    empty-cells: hide;
                                                    line-height: normal;
                                                    margin: 0;
                                                    padding: 0;
                                                  "
                                                >
                                                  <tbody
                                                    style="
                                                      box-sizing: border-box;
                                                      line-height: normal;
                                                    "
                                                  >
                                                    <tr
                                                      style="
                                                        box-sizing: border-box;
                                                        line-height: normal;
                                                      "
                                                    >
                                                      <td
                                                        class="coldrop"
                                                        valign="middle"
                                                        align="center"
                                                        width="120"
                                                        style="
                                                          box-sizing: border-box;
                                                          line-height: normal;
                                                        "
                                                      >
                                                        <img
                                                          class="rounded-8"
                                                          src="images/001-promo-placeholder-05.png"
                                                          alt=""
                                                          style="
                                                            border: 0;
                                                            box-sizing: border-box;
                                                            display: block;
                                                            line-height: normal;
                                                            vertical-align: sub;
                                                          "
                                                        />
                                                      </td>
                                                      <td
                                                        class="spacer coldrop"
                                                        valign="middle"
                                                        align="center"
                                                        width="20"
                                                        height="20"
                                                        style="
                                                          box-sizing: border-box;
                                                          font-size: 1px !important;
                                                          line-height: 1px !important;
                                                          mso-line-height-rule: exactly;
                                                        "
                                                      >
                                                        &nbsp;
                                                      </td>
                                                      <td
                                                        class="coldrop"
                                                        valign="middle"
                                                        align="left"
                                                        style="
                                                          box-sizing: border-box;
                                                          line-height: normal;
                                                        "
                                                      >
                                                        <table
                                                          cellpadding="0"
                                                          cellspacing="0"
                                                          border="0"
                                                          width="100%"
                                                          align="left"
                                                          style="
                                                            box-sizing: border-box;
                                                            empty-cells: hide;
                                                            line-height: normal;
                                                            margin: 0;
                                                            padding: 0;
                                                          "
                                                        >
                                                          <tr
                                                            style="
                                                              box-sizing: border-box;
                                                              line-height: normal;
                                                            "
                                                          >
                                                            <td
                                                              class="text-center"
                                                              valign="top"
                                                              align="left"
                                                              style="
                                                                box-sizing: border-box;
                                                                color: #075985;
                                                                font-family: Arial,
                                                                  Helvetica,
                                                                  sans-serif;
                                                                font-size: 14px;
                                                                font-weight: bold;
                                                                line-height: normal;
                                                                margin: 0 auto;
                                                                text-align: left;
                                                              "
                                                            >
                                                              Lorem ipsum dolor
                                                              sit amet,
                                                              consectetur
                                                              adipiscing
                                                            </td>
                                                          </tr>
                                                          <tr
                                                            style="
                                                              box-sizing: border-box;
                                                              line-height: normal;
                                                            "
                                                          >
                                                            <td
                                                              class="spacer"
                                                              valign="top"
                                                              style="
                                                                box-sizing: border-box;
                                                                font-size: 1px !important;
                                                                line-height: 1px !important;
                                                                mso-line-height-rule: exactly;
                                                              "
                                                              height="5"
                                                            >
                                                              &nbsp;
                                                            </td>
                                                          </tr>
                                                          <tr
                                                            style="
                                                              box-sizing: border-box;
                                                              line-height: normal;
                                                            "
                                                          >
                                                            <td
                                                              class="text-center"
                                                              valign="top"
                                                              align="left"
                                                              style="
                                                                box-sizing: border-box;
                                                                font-family: Arial,
                                                                  Helvetica,
                                                                  sans-serif;
                                                                font-size: 14px;
                                                                line-height: normal;
                                                                margin: 0 auto;
                                                                text-align: left;
                                                              "
                                                            >
                                                              Suspendisse neque
                                                              tortor,
                                                              consectetur non
                                                              placerat id,
                                                              euismod et augue.
                                                              Nunc nulla ipsum,
                                                              finibus ac sodales
                                                              eu.
                                                            </td>
                                                          </tr>
                                                          <tr
                                                            style="
                                                              box-sizing: border-box;
                                                              line-height: normal;
                                                            "
                                                          >
                                                            <td
                                                              class="spacer"
                                                              valign="top"
                                                              style="
                                                                box-sizing: border-box;
                                                                font-size: 1px !important;
                                                                line-height: 1px !important;
                                                                mso-line-height-rule: exactly;
                                                              "
                                                              height="10"
                                                            >
                                                              &nbsp;
                                                            </td>
                                                          </tr>
                                                          <tr
                                                            style="
                                                              box-sizing: border-box;
                                                              line-height: normal;
                                                            "
                                                          >
                                                            <td
                                                              class="text-center"
                                                              valign="middle"
                                                              align="left"
                                                              style="
                                                                box-sizing: border-box;
                                                                font-size: 14px;
                                                                line-height: normal;
                                                              "
                                                            >
                                                              <table
                                                                class="align-center text-center"
                                                                cellpadding="0"
                                                                cellspacing="0"
                                                                border="0"
                                                                align="left"
                                                                style="
                                                                  box-sizing: border-box;
                                                                  empty-cells: hide;
                                                                  line-height: normal;
                                                                  margin: 0;
                                                                  padding: 0;
                                                                "
                                                              >
                                                                <tr
                                                                  style="
                                                                    box-sizing: border-box;
                                                                    line-height: normal;
                                                                  "
                                                                >
                                                                  <td
                                                                    valign="middle"
                                                                    align="left"
                                                                    style="
                                                                      box-sizing: border-box;
                                                                      font-family: Arial,
                                                                        Helvetica,
                                                                        sans-serif;
                                                                      font-size: 14px;
                                                                      line-height: normal;
                                                                      margin: 0
                                                                        auto;
                                                                    "
                                                                  >
                                                                    <a
                                                                      href="https://www.samplelink.com"
                                                                      target="_blank"
                                                                      style="
                                                                        box-sizing: border-box;
                                                                        color: inherit;
                                                                        font-family: Arial,
                                                                          Helvetica,
                                                                          sans-serif;
                                                                        font-weight: bold;
                                                                        line-height: normal;
                                                                        margin: 0;
                                                                        text-decoration: none;
                                                                      "
                                                                      >Hyperlink
                                                                      here</a
                                                                    >
                                                                  </td>
                                                                  <td
                                                                    class="spacer"
                                                                    valign="middle"
                                                                    align="left"
                                                                    width="8"
                                                                    style="
                                                                      box-sizing: border-box;
                                                                      font-size: 1px !important;
                                                                      line-height: 1px !important;
                                                                      mso-line-height-rule: exactly;
                                                                    "
                                                                  >
                                                                    &nbsp;
                                                                  </td>
                                                                  <td
                                                                    valign="middle"
                                                                    align="left"
                                                                    style="
                                                                      box-sizing: border-box;
                                                                      font-family: Arial,
                                                                        Helvetica,
                                                                        sans-serif;
                                                                      font-size: 14px;
                                                                      line-height: normal;
                                                                      margin: 0
                                                                        auto;
                                                                    "
                                                                  >
                                                                    <a
                                                                      href="https://www.samplelink.com"
                                                                      target="_blank"
                                                                      style="
                                                                        box-sizing: border-box;
                                                                        color: inherit;
                                                                        font-family: Arial,
                                                                          Helvetica,
                                                                          sans-serif;
                                                                        font-weight: bold;
                                                                        line-height: normal;
                                                                        margin: 0;
                                                                        text-decoration: none;
                                                                      "
                                                                      ><img
                                                                        src="images/001-btn-arrow-right.png"
                                                                        alt=""
                                                                        style="
                                                                          border: 0;
                                                                          box-sizing: border-box;
                                                                          display: block;
                                                                          line-height: normal;
                                                                          vertical-align: sub;
                                                                        "
                                                                    /></a>
                                                                  </td>
                                                                </tr>
                                                              </table>
                                                            </td>
                                                          </tr>
                                                        </table>
                                                      </td>
                                                    </tr>
                                                    <!-- Spacer 30 table start                 -->
                                                    <tr
                                                      style="
                                                        box-sizing: border-box;
                                                        line-height: normal;
                                                      "
                                                    >
                                                      <td
                                                        class="spacer"
                                                        valign="top"
                                                        style="
                                                          box-sizing: border-box;
                                                          font-size: 1px !important;
                                                          line-height: 1px !important;
                                                          mso-line-height-rule: exactly;
                                                        "
                                                        height="30"
                                                      >
                                                        &nbsp;
                                                      </td>
                                                    </tr>
                                                    <!-- Spacer 30 table end                 -->
                                                  </tbody>
                                                </table>
                                                <!-- Article section 01 contentarea end-->
                                                <!-- Article section 02 contentarea start-->
                                                <table
                                                  cellpadding="0"
                                                  cellspacing="0"
                                                  border="0"
                                                  width="100%"
                                                  align="center"
                                                  style="
                                                    box-sizing: border-box;
                                                    empty-cells: hide;
                                                    line-height: normal;
                                                    margin: 0;
                                                    padding: 0;
                                                  "
                                                >
                                                  <tbody
                                                    style="
                                                      box-sizing: border-box;
                                                      line-height: normal;
                                                    "
                                                  >
                                                    <tr
                                                      style="
                                                        box-sizing: border-box;
                                                        line-height: normal;
                                                      "
                                                    >
                                                      <td
                                                        class="coldrop"
                                                        valign="middle"
                                                        align="center"
                                                        width="120"
                                                        style="
                                                          box-sizing: border-box;
                                                          line-height: normal;
                                                        "
                                                      >
                                                        <img
                                                          class="rounded-8"
                                                          src="images/001-promo-placeholder-05.png"
                                                          alt=""
                                                          style="
                                                            border: 0;
                                                            box-sizing: border-box;
                                                            display: block;
                                                            line-height: normal;
                                                            vertical-align: sub;
                                                          "
                                                        />
                                                      </td>
                                                      <td
                                                        class="spacer coldrop"
                                                        valign="middle"
                                                        align="center"
                                                        width="20"
                                                        height="20"
                                                        style="
                                                          box-sizing: border-box;
                                                          font-size: 1px !important;
                                                          line-height: 1px !important;
                                                          mso-line-height-rule: exactly;
                                                        "
                                                      >
                                                        &nbsp;
                                                      </td>
                                                      <td
                                                        class="coldrop"
                                                        valign="middle"
                                                        align="left"
                                                        style="
                                                          box-sizing: border-box;
                                                          line-height: normal;
                                                        "
                                                      >
                                                        <table
                                                          cellpadding="0"
                                                          cellspacing="0"
                                                          border="0"
                                                          width="100%"
                                                          align="left"
                                                          style="
                                                            box-sizing: border-box;
                                                            empty-cells: hide;
                                                            line-height: normal;
                                                            margin: 0;
                                                            padding: 0;
                                                          "
                                                        >
                                                          <tr
                                                            style="
                                                              box-sizing: border-box;
                                                              line-height: normal;
                                                            "
                                                          >
                                                            <td
                                                              class="text-center"
                                                              valign="top"
                                                              align="left"
                                                              style="
                                                                box-sizing: border-box;
                                                                color: #075985;
                                                                font-family: Arial,
                                                                  Helvetica,
                                                                  sans-serif;
                                                                font-size: 14px;
                                                                font-weight: bold;
                                                                line-height: normal;
                                                                margin: 0 auto;
                                                                text-align: left;
                                                              "
                                                            >
                                                              Lorem ipsum dolor
                                                              sit amet,
                                                              consectetur
                                                              adipiscing
                                                            </td>
                                                          </tr>
                                                          <tr
                                                            style="
                                                              box-sizing: border-box;
                                                              line-height: normal;
                                                            "
                                                          >
                                                            <td
                                                              class="spacer"
                                                              valign="top"
                                                              style="
                                                                box-sizing: border-box;
                                                                font-size: 1px !important;
                                                                line-height: 1px !important;
                                                                mso-line-height-rule: exactly;
                                                              "
                                                              height="5"
                                                            >
                                                              &nbsp;
                                                            </td>
                                                          </tr>
                                                          <tr
                                                            style="
                                                              box-sizing: border-box;
                                                              line-height: normal;
                                                            "
                                                          >
                                                            <td
                                                              class="text-center"
                                                              valign="top"
                                                              align="left"
                                                              style="
                                                                box-sizing: border-box;
                                                                font-family: Arial,
                                                                  Helvetica,
                                                                  sans-serif;
                                                                font-size: 14px;
                                                                line-height: normal;
                                                                margin: 0 auto;
                                                                text-align: left;
                                                              "
                                                            >
                                                              Suspendisse neque
                                                              tortor,
                                                              consectetur non
                                                              placerat id,
                                                              euismod et augue.
                                                              Nunc nulla ipsum,
                                                              finibus ac sodales
                                                              eu.
                                                            </td>
                                                          </tr>
                                                          <tr
                                                            style="
                                                              box-sizing: border-box;
                                                              line-height: normal;
                                                            "
                                                          >
                                                            <td
                                                              class="spacer"
                                                              valign="top"
                                                              style="
                                                                box-sizing: border-box;
                                                                font-size: 1px !important;
                                                                line-height: 1px !important;
                                                                mso-line-height-rule: exactly;
                                                              "
                                                              height="10"
                                                            >
                                                              &nbsp;
                                                            </td>
                                                          </tr>
                                                          <tr
                                                            style="
                                                              box-sizing: border-box;
                                                              line-height: normal;
                                                            "
                                                          >
                                                            <td
                                                              class="text-center"
                                                              valign="middle"
                                                              align="left"
                                                              style="
                                                                box-sizing: border-box;
                                                                font-family: Arial,
                                                                  Helvetica,
                                                                  sans-serif;
                                                                font-size: 14px;
                                                                line-height: normal;
                                                                margin: 0 auto;
                                                              "
                                                            >
                                                              <table
                                                                class="align-center text-center"
                                                                cellpadding="0"
                                                                cellspacing="0"
                                                                border="0"
                                                                align="left"
                                                                style="
                                                                  box-sizing: border-box;
                                                                  empty-cells: hide;
                                                                  line-height: normal;
                                                                  margin: 0;
                                                                  padding: 0;
                                                                "
                                                              >
                                                                <tr
                                                                  style="
                                                                    box-sizing: border-box;
                                                                    line-height: normal;
                                                                  "
                                                                >
                                                                  <td
                                                                    valign="middle"
                                                                    align="left"
                                                                    style="
                                                                      box-sizing: border-box;
                                                                      font-family: Arial,
                                                                        Helvetica,
                                                                        sans-serif;
                                                                      font-size: 14px;
                                                                      line-height: normal;
                                                                      margin: 0
                                                                        auto;
                                                                    "
                                                                  >
                                                                    <a
                                                                      href="https://www.samplelink.com"
                                                                      target="_blank"
                                                                      style="
                                                                        box-sizing: border-box;
                                                                        color: inherit;
                                                                        font-family: Arial,
                                                                          Helvetica,
                                                                          sans-serif;
                                                                        font-weight: bold;
                                                                        line-height: normal;
                                                                        margin: 0;
                                                                        text-decoration: none;
                                                                      "
                                                                      >Hyperlink
                                                                      here</a
                                                                    >
                                                                  </td>
                                                                  <td
                                                                    class="spacer"
                                                                    valign="middle"
                                                                    align="left"
                                                                    width="8"
                                                                    style="
                                                                      box-sizing: border-box;
                                                                      font-family: Arial,
                                                                        Helvetica,
                                                                        sans-serif;
                                                                      font-size: 1px !important;
                                                                      line-height: 1px !important;
                                                                      margin: 0
                                                                        auto;
                                                                      mso-line-height-rule: exactly;
                                                                    "
                                                                  >
                                                                    &nbsp;
                                                                  </td>
                                                                  <td
                                                                    valign="middle"
                                                                    align="left"
                                                                    style="
                                                                      box-sizing: border-box;
                                                                      font-family: Arial,
                                                                        Helvetica,
                                                                        sans-serif;
                                                                      font-size: 14px;
                                                                      line-height: normal;
                                                                      margin: 0
                                                                        auto;
                                                                    "
                                                                  >
                                                                    <a
                                                                      href="https://www.samplelink.com"
                                                                      target="_blank"
                                                                      style="
                                                                        box-sizing: border-box;
                                                                        color: inherit;
                                                                        font-family: Arial,
                                                                          Helvetica,
                                                                          sans-serif;
                                                                        font-weight: bold;
                                                                        line-height: normal;
                                                                        margin: 0;
                                                                        text-decoration: none;
                                                                      "
                                                                      ><img
                                                                        src="images/001-btn-arrow-right.png"
                                                                        alt=""
                                                                        style="
                                                                          border: 0;
                                                                          box-sizing: border-box;
                                                                          display: block;
                                                                          line-height: normal;
                                                                          vertical-align: sub;
                                                                        "
                                                                    /></a>
                                                                  </td>
                                                                </tr>
                                                              </table>
                                                            </td>
                                                          </tr>
                                                        </table>
                                                      </td>
                                                    </tr>
                                                    <!-- Spacer 20 start-->
                                                    <tr
                                                      style="
                                                        box-sizing: border-box;
                                                        line-height: normal;
                                                      "
                                                    >
                                                      <td
                                                        class="spacer"
                                                        valign="top"
                                                        style="
                                                          box-sizing: border-box;
                                                          font-size: 1px !important;
                                                          line-height: 1px !important;
                                                          mso-line-height-rule: exactly;
                                                        "
                                                        height="20"
                                                      >
                                                        &nbsp;
                                                      </td>
                                                    </tr>
                                                    <!-- Spacer 20 end-->
                                                  </tbody>
                                                </table>
                                                <!-- Article section 02 contentarea end-->
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <!-- Rounded white block bottom end-->
                          </tbody>
                        </table>
                        <!-- White block six contentarea end-->
                        <!-- White block seven contentarea start-->
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          border="0"
                          width="100%"
                          style="
                            box-sizing: border-box;
                            empty-cells: hide;
                            line-height: normal;
                            margin: 0;
                            padding: 0;
                          "
                        >
                          <tbody
                            style="box-sizing: border-box; line-height: normal"
                          >
                            <!-- Spacer 40/25 start-->
                            <tr
                              style="
                                box-sizing: border-box;
                                line-height: normal;
                              "
                            >
                              <td
                                class="pt-mob-25 spacer"
                                valign="top"
                                align="center"
                                style="
                                  box-sizing: border-box;
                                  font-size: 1px !important;
                                  line-height: 1px !important;
                                  mso-line-height-rule: exactly;
                                  padding-top: 40px;
                                "
                              >
                                &nbsp;
                              </td>
                            </tr>
                            <!-- Spacer 40/25 end-->
                            <!-- Rounded white block content start-->
                            <tr
                              style="
                                box-sizing: border-box;
                                line-height: normal;
                              "
                            >
                              <td
                                align="center"
                                valign="middle"
                                bgcolor="#ffffff"
                                style="
                                  border-radius: 8px;
                                  box-sizing: border-box;
                                  line-height: normal;
                                "
                              >
                                <table
                                  class="contents"
                                  cellpadding="0"
                                  cellspacing="0"
                                  border="0"
                                  width="530"
                                  align="center"
                                  style="
                                    box-sizing: border-box;
                                    empty-cells: hide;
                                    line-height: normal;
                                    margin: 0;
                                    padding: 0;
                                  "
                                >
                                  <tbody
                                    style="
                                      box-sizing: border-box;
                                      line-height: normal;
                                    "
                                  >
                                    <!-- Spacer 20 start-->
                                    <tr
                                      style="
                                        box-sizing: border-box;
                                        line-height: normal;
                                      "
                                    >
                                      <td
                                        class="spacer"
                                        valign="top"
                                        style="
                                          box-sizing: border-box;
                                          font-size: 1px !important;
                                          line-height: 1px !important;
                                          mso-line-height-rule: exactly;
                                        "
                                        height="20"
                                      >
                                        &nbsp;
                                      </td>
                                    </tr>
                                    <!-- Spacer 20 end-->
                                    <!-- block heading start-->
                                    <tr
                                      style="
                                        box-sizing: border-box;
                                        line-height: normal;
                                      "
                                    >
                                      <td
                                        align="center"
                                        valign="middle"
                                        style="
                                          box-sizing: border-box;
                                          line-height: normal;
                                        "
                                      >
                                        <table
                                          cellpadding="0"
                                          cellspacing="0"
                                          border="0"
                                          width
                                          align="center"
                                          style="
                                            box-sizing: border-box;
                                            empty-cells: hide;
                                            line-height: normal;
                                            margin: 0;
                                            padding: 0;
                                          "
                                        >
                                          <tbody
                                            style="
                                              box-sizing: border-box;
                                              line-height: normal;
                                            "
                                          >
                                            <tr
                                              style="
                                                box-sizing: border-box;
                                                line-height: normal;
                                              "
                                            >
                                              <td
                                                width="10"
                                                align="left"
                                                valign="middle"
                                                style="
                                                  box-sizing: border-box;
                                                  line-height: normal;
                                                "
                                              >
                                                <img
                                                  src="images/001-multicolor-heading-decor-left.png"
                                                  alt=""
                                                  style="
                                                    border: 0;
                                                    box-sizing: border-box;
                                                    display: block;
                                                    line-height: normal;
                                                    vertical-align: sub;
                                                  "
                                                />
                                              </td>
                                              <td
                                                class="text-center fz-mob-22"
                                                align="center"
                                                valign="middle"
                                                style="
                                                  box-sizing: border-box;
                                                  font-family: Arial, Helvetica,
                                                    sans-serif;
                                                  font-size: 25px;
                                                  font-weight: bold;
                                                  line-height: normal;
                                                  margin: 0 auto;
                                                  padding-left: 5px;
                                                  padding-right: 5px;
                                                "
                                              >
                                                Lorem ipsum dolor sit amet con
                                              </td>
                                              <td
                                                width="10"
                                                align="right"
                                                valign="middle"
                                                style="
                                                  box-sizing: border-box;
                                                  line-height: normal;
                                                "
                                              >
                                                <img
                                                  src="images/001-multicolor-heading-decor-right.png"
                                                  alt=""
                                                  style="
                                                    border: 0;
                                                    box-sizing: border-box;
                                                    display: block;
                                                    line-height: normal;
                                                    vertical-align: sub;
                                                  "
                                                />
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                    <!-- block heading end-->
                                    <!-- Spacer 20 start-->
                                    <tr
                                      style="
                                        box-sizing: border-box;
                                        line-height: normal;
                                      "
                                    >
                                      <td
                                        class="spacer"
                                        valign="top"
                                        style="
                                          box-sizing: border-box;
                                          font-size: 1px !important;
                                          line-height: 1px !important;
                                          mso-line-height-rule: exactly;
                                        "
                                        height="20"
                                      >
                                        &nbsp;
                                      </td>
                                    </tr>
                                    <!-- Spacer 20 end-->
                                    <tr
                                      style="
                                        box-sizing: border-box;
                                        line-height: normal;
                                      "
                                    >
                                      <td
                                        valign="top"
                                        align="center"
                                        style="
                                          box-sizing: border-box;
                                          line-height: normal;
                                        "
                                      >
                                        <table
                                          class="full"
                                          cellpadding="0"
                                          cellspacing="0"
                                          border="0"
                                          width="535"
                                          align="center"
                                          style="
                                            box-sizing: border-box;
                                            empty-cells: hide;
                                            line-height: normal;
                                            margin: 0;
                                            padding: 0;
                                          "
                                        >
                                          <tbody
                                            style="
                                              box-sizing: border-box;
                                              line-height: normal;
                                            "
                                          >
                                            <tr
                                              style="
                                                box-sizing: border-box;
                                                line-height: normal;
                                              "
                                            >
                                              <td
                                                class="text-center coldrop"
                                                width="165"
                                                align="center"
                                                valign="top"
                                                style="
                                                  box-sizing: border-box;
                                                  line-height: normal;
                                                "
                                              >
                                                <!-- Promo ten contentarea start-->
                                                <table
                                                  cellpadding="0"
                                                  cellspacing="0"
                                                  border="0"
                                                  width="100%"
                                                  align="center"
                                                  style="
                                                    box-sizing: border-box;
                                                    empty-cells: hide;
                                                    line-height: normal;
                                                    margin: 0;
                                                    padding: 0;
                                                  "
                                                >
                                                  <tbody
                                                    style="
                                                      box-sizing: border-box;
                                                      line-height: normal;
                                                    "
                                                  >
                                                    <tr
                                                      style="
                                                        box-sizing: border-box;
                                                        line-height: normal;
                                                      "
                                                    >
                                                      <td
                                                        valign="middle"
                                                        align="center"
                                                        style="
                                                          box-sizing: border-box;
                                                          line-height: normal;
                                                        "
                                                      >
                                                        <img
                                                          class="rounded-8 imgfull"
                                                          src="images/001-promo-placeholder-06.png"
                                                          alt=""
                                                          style="
                                                            border: 0;
                                                            box-sizing: border-box;
                                                            display: block;
                                                            line-height: normal;
                                                            vertical-align: sub;
                                                          "
                                                        />
                                                      </td>
                                                    </tr>
                                                    <tr
                                                      style="
                                                        box-sizing: border-box;
                                                        line-height: normal;
                                                      "
                                                    >
                                                      <td
                                                        valign="top"
                                                        align="center"
                                                        style="
                                                          box-sizing: border-box;
                                                          line-height: normal;
                                                        "
                                                      >
                                                        <table
                                                          cellpadding="0"
                                                          cellspacing="0"
                                                          border="0"
                                                          width="100%"
                                                          align="center"
                                                          style="
                                                            box-sizing: border-box;
                                                            empty-cells: hide;
                                                            line-height: normal;
                                                            margin: 0;
                                                            padding: 0;
                                                            padding-left: 10px;
                                                            padding-right: 10px;
                                                          "
                                                        >
                                                          <tr
                                                            style="
                                                              box-sizing: border-box;
                                                              line-height: normal;
                                                            "
                                                          >
                                                            <td
                                                              class="spacer"
                                                              valign="top"
                                                              style="
                                                                box-sizing: border-box;
                                                                font-size: 1px !important;
                                                                line-height: 1px !important;
                                                                mso-line-height-rule: exactly;
                                                              "
                                                              height="20"
                                                            >
                                                              &nbsp;
                                                            </td>
                                                          </tr>
                                                          <tr
                                                            style="
                                                              box-sizing: border-box;
                                                              line-height: normal;
                                                            "
                                                          >
                                                            <td
                                                              valign="top"
                                                              align="center"
                                                              style="
                                                                box-sizing: border-box;
                                                                font-family: Arial,
                                                                  Helvetica,
                                                                  sans-serif;
                                                                font-size: 14px;
                                                                font-weight: bold;
                                                                line-height: normal;
                                                                margin: 0 auto;
                                                                mso-line-height-rule: exactly;
                                                              "
                                                            >
                                                              Lorem ipsum
                                                            </td>
                                                          </tr>
                                                          <tr
                                                            style="
                                                              box-sizing: border-box;
                                                              line-height: normal;
                                                            "
                                                          >
                                                            <td
                                                              class="spacer"
                                                              valign="top"
                                                              style="
                                                                box-sizing: border-box;
                                                                font-size: 1px !important;
                                                                line-height: 1px !important;
                                                                mso-line-height-rule: exactly;
                                                              "
                                                              height="5"
                                                            >
                                                              &nbsp;
                                                            </td>
                                                          </tr>
                                                          <tr
                                                            style="
                                                              box-sizing: border-box;
                                                              line-height: normal;
                                                            "
                                                          >
                                                            <td
                                                              valign="top"
                                                              align="center"
                                                              style="
                                                                box-sizing: border-box;
                                                                font-family: Arial,
                                                                  Helvetica,
                                                                  sans-serif;
                                                                font-size: 14px;
                                                                line-height: normal;
                                                                margin: 0 auto;
                                                              "
                                                            >
                                                              Lorem ipsum dolor
                                                              sit amet,
                                                              consectetur
                                                              adipiscing elit.
                                                              Morbi porta ex a
                                                              placerat
                                                              vulputate. Nam
                                                              risus elit,
                                                              blandit ac elit
                                                              at, malesuada
                                                              maximus.
                                                            </td>
                                                          </tr>
                                                        </table>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                                <!-- Promo ten contentarea end-->
                                              </td>
                                              <td
                                                class="coldrop spacer"
                                                valign="top"
                                                align="center"
                                                width="20"
                                                height="30"
                                                style="
                                                  box-sizing: border-box;
                                                  font-size: 1px !important;
                                                  line-height: 1px !important;
                                                  mso-line-height-rule: exactly;
                                                "
                                              >
                                                &nbsp;
                                              </td>
                                              <td
                                                class="text-center coldrop"
                                                width="165"
                                                align="center"
                                                valign="top"
                                                style="
                                                  box-sizing: border-box;
                                                  line-height: normal;
                                                "
                                              >
                                                <!-- Promo eleven contentarea start-->
                                                <table
                                                  cellpadding="0"
                                                  cellspacing="0"
                                                  border="0"
                                                  width="100%"
                                                  align="center"
                                                  style="
                                                    box-sizing: border-box;
                                                    empty-cells: hide;
                                                    line-height: normal;
                                                    margin: 0;
                                                    padding: 0;
                                                  "
                                                >
                                                  <tbody
                                                    style="
                                                      box-sizing: border-box;
                                                      line-height: normal;
                                                    "
                                                  >
                                                    <tr
                                                      style="
                                                        box-sizing: border-box;
                                                        line-height: normal;
                                                      "
                                                    >
                                                      <td
                                                        valign="middle"
                                                        align="center"
                                                        style="
                                                          box-sizing: border-box;
                                                          line-height: normal;
                                                        "
                                                      >
                                                        <img
                                                          class="rounded-8 imgfull"
                                                          src="images/001-promo-placeholder-06.png"
                                                          alt=""
                                                          style="
                                                            border: 0;
                                                            box-sizing: border-box;
                                                            display: block;
                                                            line-height: normal;
                                                            vertical-align: sub;
                                                          "
                                                        />
                                                      </td>
                                                    </tr>
                                                    <tr
                                                      style="
                                                        box-sizing: border-box;
                                                        line-height: normal;
                                                      "
                                                    >
                                                      <td
                                                        valign="top"
                                                        align="center"
                                                        style="
                                                          box-sizing: border-box;
                                                          line-height: normal;
                                                        "
                                                      >
                                                        <table
                                                          cellpadding="0"
                                                          cellspacing="0"
                                                          border="0"
                                                          width="100%"
                                                          align="center"
                                                          style="
                                                            box-sizing: border-box;
                                                            empty-cells: hide;
                                                            line-height: normal;
                                                            margin: 0;
                                                            padding: 0;
                                                            padding-left: 10px;
                                                            padding-right: 10px;
                                                          "
                                                        >
                                                          <tr
                                                            style="
                                                              box-sizing: border-box;
                                                              line-height: normal;
                                                            "
                                                          >
                                                            <td
                                                              class="spacer"
                                                              valign="top"
                                                              style="
                                                                box-sizing: border-box;
                                                                font-size: 1px !important;
                                                                line-height: 1px !important;
                                                                mso-line-height-rule: exactly;
                                                              "
                                                              height="20"
                                                            >
                                                              &nbsp;
                                                            </td>
                                                          </tr>
                                                          <tr
                                                            style="
                                                              box-sizing: border-box;
                                                              line-height: normal;
                                                            "
                                                          >
                                                            <td
                                                              valign="top"
                                                              align="center"
                                                              style="
                                                                box-sizing: border-box;
                                                                font-family: Arial,
                                                                  Helvetica,
                                                                  sans-serif;
                                                                font-size: 14px;
                                                                font-weight: bold;
                                                                line-height: normal;
                                                                margin: 0 auto;
                                                                mso-line-height-rule: exactly;
                                                              "
                                                            >
                                                              Lorem ipsum
                                                            </td>
                                                          </tr>
                                                          <tr
                                                            style="
                                                              box-sizing: border-box;
                                                              line-height: normal;
                                                            "
                                                          >
                                                            <td
                                                              class="spacer"
                                                              valign="top"
                                                              style="
                                                                box-sizing: border-box;
                                                                font-size: 1px !important;
                                                                line-height: 1px !important;
                                                                mso-line-height-rule: exactly;
                                                              "
                                                              height="5"
                                                            >
                                                              &nbsp;
                                                            </td>
                                                          </tr>
                                                          <tr
                                                            style="
                                                              box-sizing: border-box;
                                                              line-height: normal;
                                                            "
                                                          >
                                                            <td
                                                              valign="top"
                                                              align="center"
                                                              style="
                                                                box-sizing: border-box;
                                                                font-family: Arial,
                                                                  Helvetica,
                                                                  sans-serif;
                                                                font-size: 14px;
                                                                line-height: normal;
                                                                margin: 0 auto;
                                                              "
                                                            >
                                                              Lorem ipsum dolor
                                                              sit amet,
                                                              consectetur
                                                              adipiscing elit.
                                                              Morbi porta ex a
                                                              placerat
                                                              vulputate. Nam
                                                              risus elit,
                                                              blandit ac elit
                                                              at, malesuada
                                                              maximus.
                                                            </td>
                                                          </tr>
                                                        </table>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                                <!-- Promo eleven contentarea end-->
                                              </td>
                                              <td
                                                class="coldrop spacer"
                                                valign="top"
                                                align="center"
                                                width="20"
                                                height="30"
                                                style="
                                                  box-sizing: border-box;
                                                  font-size: 1px !important;
                                                  line-height: 1px !important;
                                                  mso-line-height-rule: exactly;
                                                "
                                              >
                                                &nbsp;
                                              </td>
                                              <td
                                                class="text-center coldrop"
                                                width="165"
                                                align="center"
                                                valign="top"
                                                style="
                                                  box-sizing: border-box;
                                                  line-height: normal;
                                                "
                                              >
                                                <!-- Promo tweleve contentarea start-->
                                                <table
                                                  cellpadding="0"
                                                  cellspacing="0"
                                                  border="0"
                                                  width="100%"
                                                  align="center"
                                                  style="
                                                    box-sizing: border-box;
                                                    empty-cells: hide;
                                                    line-height: normal;
                                                    margin: 0;
                                                    padding: 0;
                                                  "
                                                >
                                                  <tbody
                                                    style="
                                                      box-sizing: border-box;
                                                      line-height: normal;
                                                    "
                                                  >
                                                    <tr
                                                      style="
                                                        box-sizing: border-box;
                                                        line-height: normal;
                                                      "
                                                    >
                                                      <td
                                                        valign="middle"
                                                        align="center"
                                                        style="
                                                          box-sizing: border-box;
                                                          line-height: normal;
                                                        "
                                                      >
                                                        <img
                                                          class="rounded-8 imgfull"
                                                          src="images/001-promo-placeholder-06.png"
                                                          alt=""
                                                          style="
                                                            border: 0;
                                                            box-sizing: border-box;
                                                            display: block;
                                                            line-height: normal;
                                                            vertical-align: sub;
                                                          "
                                                        />
                                                      </td>
                                                    </tr>
                                                    <tr
                                                      style="
                                                        box-sizing: border-box;
                                                        line-height: normal;
                                                      "
                                                    >
                                                      <td
                                                        valign="top"
                                                        align="center"
                                                        style="
                                                          box-sizing: border-box;
                                                          line-height: normal;
                                                        "
                                                      >
                                                        <table
                                                          cellpadding="0"
                                                          cellspacing="0"
                                                          border="0"
                                                          width="100%"
                                                          align="center"
                                                          style="
                                                            box-sizing: border-box;
                                                            empty-cells: hide;
                                                            line-height: normal;
                                                            margin: 0;
                                                            padding: 0;
                                                            padding-left: 10px;
                                                            padding-right: 10px;
                                                          "
                                                        >
                                                          <tr
                                                            style="
                                                              box-sizing: border-box;
                                                              line-height: normal;
                                                            "
                                                          >
                                                            <td
                                                              class="spacer"
                                                              valign="top"
                                                              style="
                                                                box-sizing: border-box;
                                                                font-size: 1px !important;
                                                                line-height: 1px !important;
                                                                mso-line-height-rule: exactly;
                                                              "
                                                              height="20"
                                                            >
                                                              &nbsp;
                                                            </td>
                                                          </tr>
                                                          <tr
                                                            style="
                                                              box-sizing: border-box;
                                                              line-height: normal;
                                                            "
                                                          >
                                                            <td
                                                              valign="top"
                                                              align="center"
                                                              style="
                                                                box-sizing: border-box;
                                                                font-family: Arial,
                                                                  Helvetica,
                                                                  sans-serif;
                                                                font-size: 14px;
                                                                font-weight: bold;
                                                                line-height: normal;
                                                                margin: 0 auto;
                                                                mso-line-height-rule: exactly;
                                                              "
                                                            >
                                                              Lorem ipsum
                                                            </td>
                                                          </tr>
                                                          <tr
                                                            style="
                                                              box-sizing: border-box;
                                                              line-height: normal;
                                                            "
                                                          >
                                                            <td
                                                              class="spacer"
                                                              valign="top"
                                                              style="
                                                                box-sizing: border-box;
                                                                font-size: 1px !important;
                                                                line-height: 1px !important;
                                                                mso-line-height-rule: exactly;
                                                              "
                                                              height="5"
                                                            >
                                                              &nbsp;
                                                            </td>
                                                          </tr>
                                                          <tr
                                                            style="
                                                              box-sizing: border-box;
                                                              line-height: normal;
                                                            "
                                                          >
                                                            <td
                                                              valign="top"
                                                              align="center"
                                                              style="
                                                                box-sizing: border-box;
                                                                font-family: Arial,
                                                                  Helvetica,
                                                                  sans-serif;
                                                                font-size: 14px;
                                                                line-height: normal;
                                                                margin: 0 auto;
                                                              "
                                                            >
                                                              Lorem ipsum dolor
                                                              sit amet,
                                                              consectetur
                                                              adipiscing elit.
                                                              Morbi porta ex a
                                                              placerat
                                                              vulputate. Nam
                                                              risus elit,
                                                              blandit ac elit
                                                              at, malesuada
                                                              maximus.
                                                            </td>
                                                          </tr>
                                                        </table>
                                                      </td>
                                                    </tr>
                                                  </tbody>
                                                </table>
                                                <!-- Promo tweleve contentarea end-->
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </td>
                                    </tr>
                                    <!-- Spacer 20 start-->
                                    <tr
                                      style="
                                        box-sizing: border-box;
                                        line-height: normal;
                                      "
                                    >
                                      <td
                                        class="spacer"
                                        valign="top"
                                        style="
                                          box-sizing: border-box;
                                          font-size: 1px !important;
                                          line-height: 1px !important;
                                          mso-line-height-rule: exactly;
                                        "
                                        height="20"
                                      >
                                        &nbsp;
                                      </td>
                                    </tr>
                                    <!-- Spacer 20 end-->
                                    <!-- Big Blue CTA Start-->
                                    <tr
                                      style="
                                        box-sizing: border-box;
                                        line-height: normal;
                                      "
                                    >
                                      <td
                                        align="center"
                                        style="
                                          box-sizing: border-box;
                                          color: #ffffff;
                                          font-family: Arial;
                                          font-size: 16px;
                                          line-height: normal;
                                          margin: 0 auto;
                                        "
                                        valign="middle"
                                      >
                                        <table
                                          width="190"
                                          border="0"
                                          cellspacing="0"
                                          cellpadding="0"
                                          align="center"
                                          style="
                                            box-sizing: border-box;
                                            empty-cells: hide;
                                            line-height: normal;
                                            margin: 0;
                                            padding: 0;
                                          "
                                        >
                                          <tr
                                            style="
                                              box-sizing: border-box;
                                              line-height: normal;
                                            "
                                          >
                                            <td
                                              class="text-center"
                                              style="
                                                border-radius: 8px;
                                                box-sizing: border-box;
                                                color: #ffffff;
                                                font-family: Arial;
                                                font-size: 18px;
                                                font-weight: bold;
                                                line-height: normal;
                                                margin: 0 auto;
                                              "
                                              bgcolor="#075985"
                                              valign="middle"
                                              align="center"
                                            >
                                              <a
                                                style="
                                                  -moz-border-radius: 8px;
                                                  -webkit-border-radius: 8px;
                                                  background-color: #075985;
                                                  border: 0px solid #075985;
                                                  border-radius: 8px;
                                                  box-sizing: border-box;
                                                  color: #ffffff;
                                                  display: block;
                                                  font-family: Arial, Helvetica,
                                                    sans-serif;
                                                  font-size: 18px;
                                                  font-weight: bold;
                                                  line-height: normal;
                                                  margin: 0;
                                                  padding-bottom: 15px;
                                                  padding-left: 10px;
                                                  padding-right: 10px;
                                                  padding-top: 15px;
                                                  text-decoration: none;
                                                "
                                                href="https://www.samplelink.com"
                                                target="_blank"
                                                >Learn more</a
                                              >
                                            </td>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                    <!-- Big Blue CTA end-->
                                    <!-- Spacer 20 start-->
                                    <tr
                                      style="
                                        box-sizing: border-box;
                                        line-height: normal;
                                      "
                                    >
                                      <td
                                        class="spacer"
                                        valign="top"
                                        style="
                                          box-sizing: border-box;
                                          font-size: 1px !important;
                                          line-height: 1px !important;
                                          mso-line-height-rule: exactly;
                                        "
                                        height="20"
                                      >
                                        &nbsp;
                                      </td>
                                    </tr>
                                    <!-- Spacer 20 end-->
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <!-- Rounded white block content end-->
                            <!-- Spacer 40/25 start-->
                            <tr
                              style="
                                box-sizing: border-box;
                                line-height: normal;
                              "
                            >
                              <td
                                class="pt-mob-25 spacer"
                                valign="top"
                                align="center"
                                style="
                                  box-sizing: border-box;
                                  font-size: 1px !important;
                                  line-height: 1px !important;
                                  mso-line-height-rule: exactly;
                                  padding-top: 40px;
                                "
                              >
                                &nbsp;
                              </td>
                            </tr>
                            <!-- Spacer 40/25 end-->
                          </tbody>
                        </table>
                        <!-- White block seven contentarea end-->
                        <!-- Footer white block contentarea start-->
                        <table
                          cellpadding="0"
                          cellspacing="0"
                          border="0"
                          width="100%"
                          bgcolor="#ffffff"
                          style="
                            box-sizing: border-box;
                            empty-cells: hide;
                            line-height: normal;
                            margin: 0;
                            padding: 0;
                          "
                        >
                          <tbody
                            style="box-sizing: border-box; line-height: normal"
                          >
                            <!-- Spacer 30/20 start-->
                            <tr
                              style="
                                box-sizing: border-box;
                                line-height: normal;
                              "
                            >
                              <td
                                class="pt-mob-20 spacer"
                                valign="top"
                                align="center"
                                style="
                                  box-sizing: border-box;
                                  font-size: 1px !important;
                                  line-height: 1px !important;
                                  mso-line-height-rule: exactly;
                                  padding-top: 30px;
                                "
                              >
                                &nbsp;
                              </td>
                            </tr>
                            <!-- Spacer 30/20 end-->

                            <!-- Footer Social media block start-->
                            <tr
                              style="
                                box-sizing: border-box;
                                line-height: normal;
                              "
                            >
                              <td
                                valign="top"
                                align="center"
                                style="
                                  box-sizing: border-box;
                                  line-height: normal;
                                "
                              >
                                <table
                                  cellpadding="0"
                                  cellspacing="0"
                                  border="0"
                                  align="center"
                                  style="
                                    box-sizing: border-box;
                                    empty-cells: hide;
                                    line-height: normal;
                                    margin: 0;
                                    padding: 0;
                                  "
                                >
                                  <tr
                                    style="
                                      box-sizing: border-box;
                                      line-height: normal;
                                    "
                                  >
                                    <td valign="top" align="center">
                                      <table
                                        cellpadding="0"
                                        cellspacing="0"
                                        border="0"
                                        align="center"
                                        style="
                                          box-sizing: border-box;
                                          empty-cells: hide;
                                          line-height: normal;
                                          margin: 0;
                                          padding: 0;
                                        "
                                      >
                                        <tr
                                          style="
                                            box-sizing: border-box;
                                            line-height: normal;
                                          "
                                        >
                                          <td
                                            class="text-black"
                                            align="center"
                                            valign="middle"
                                            style="
                                              box-sizing: border-box;
                                              color: #010101;
                                              font-family: Arial, Helvetica,
                                                sans-serif;
                                              font-size: 12px;
                                              font-weight: bold;
                                              line-height: normal;
                                              margin: 0 auto;
                                            "
                                          >
                                            Connect with us
                                          </td>
                                          <td
                                            class="spacer"
                                            valign="middle"
                                            width="10"
                                            style="
                                              box-sizing: border-box;
                                              font-family: Arial, Helvetica,
                                              font-size: 1px !important;
                                              line-height: 1px !important;
                                              margin: 0 auto;
                                              mso-line-height-rule: exactly;
                                            "
                                          ></td>
                                          <template
                                            v-for="(item, index) in social"
                                            :key="item.name"
                                          >
                                            <td>
                                              <a
                                                v-tooltip="item.name"
                                                :title="item.name"
                                                :href="item.href"
                                                class="text-gray-800 dark:text-gray-400 hover:text-gray-500 hover:dark:text-white"
                                                style="color: #010101"
                                              >
                                                <img
                                                  :src="item.iconUrl"
                                                  class="h-6 w-6"
                                                  width="24"
                                                  height="24"
                                                  aria-hidden="true"
                                                  :alt="item.name"
                                                />
                                                <!-- <component :is="item.icon" class="h-6 w-6" aria-hidden="true" /> -->
                                              </a>
                                            </td>
                                            <td
                                              v-if="index !== social.length - 1"
                                              class="spacer"
                                              valign="middle"
                                              width="10"
                                              style="
                                                box-sizing: border-box;
                                                font-family: Arial, Helvetica,
                                                  sans-serif;
                                                font-size: 1px !important;
                                                line-height: 1px !important;
                                                margin: 0 auto;
                                                mso-line-height-rule: exactly;
                                              "
                                            ></td>
                                          </template>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                  <!-- spacer 10 start-->
                                  <tr
                                    style="
                                      box-sizing: border-box;
                                      line-height: normal;
                                    "
                                  >
                                    <td
                                      class="spacer"
                                      valign="top"
                                      align="center"
                                      style="
                                        box-sizing: border-box;
                                        font-size: 1px !important;
                                        line-height: 1px !important;
                                        mso-line-height-rule: exactly;
                                        padding-top: 10px;
                                      "
                                    >
                                      &nbsp;
                                    </td>
                                  </tr>
                                  <!-- spacer 10 end-->
                                  <!-- Footer copy right text start -->
                                  <tr
                                    style="
                                      box-sizing: border-box;
                                      line-height: normal;
                                    "
                                  >
                                    <td
                                      class="text-black"
                                      align="center"
                                      valign="middle"
                                      style="
                                        box-sizing: border-box;
                                        color: #010101;
                                        font-family: Arial, Helvetica,
                                          sans-serif;
                                        font-size: 12px;
                                        font-weight: bold;
                                        line-height: normal;
                                        margin: 0 auto;
                                      "
                                    >
                                      Copyright © 2022
                                      <a :href="app.author.link">{{
                                        app.name
                                      }}</a
                                      >. All rights reserved.
                                    </td>
                                  </tr>
                                  <!-- Footer copy right text end -->
                                  <!-- spacer 20 start-->
                                  <tr
                                    style="
                                      box-sizing: border-box;
                                      line-height: normal;
                                    "
                                  >
                                    <td
                                      class="pt-mob-20 spacer"
                                      valign="top"
                                      align="center"
                                      style="
                                        box-sizing: border-box;
                                        font-size: 1px !important;
                                        line-height: 1px !important;
                                        mso-line-height-rule: exactly;
                                        padding-top: 20px;
                                      "
                                    >
                                      &nbsp;
                                    </td>
                                  </tr>
                                  <!-- spacer 20 end-->
                                </table>
                              </td>
                            </tr>
                            <!-- Footer Social media block end-->
                          </tbody>
                        </table>
                        <!-- Footer white block contentarea end-->
                      </td>
                    </tr>
                    <!-- Main Content block end-->
                    <!-- spacer 30/20 start-->
                    <tr style="box-sizing: border-box; line-height: normal">
                      <td
                        class="pt-mob-20 spacer"
                        valign="top"
                        align="center"
                        style="
                          box-sizing: border-box;
                          font-size: 1px !important;
                          line-height: 1px !important;
                          mso-line-height-rule: exactly;
                          padding-top: 30px;
                        "
                      >
                        &nbsp;
                      </td>
                    </tr>
                    <!-- spacer 30/20 end-->
                    <!-- Footer block end-->
                  </tbody>
                </table>
                <!-- Gmail Wrapper end-->
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </div>
</template>

<style lang="scss">
@media screen and (max-width: 570px) {
  .wrapper,
  .content-table {
    width: 100% !important;
  }
  .imgfull {
    width: 100%;
    height: auto;
  }
}
</style>
