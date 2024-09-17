<!DOCTYPE html>
<html>

<head>
    <title>@lang('pdf_invoice_label') - {{ $invoice->invoice_number }}</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

    <style type="text/css">
        /* -- Base -- */
        @font-face {
            font-family: 'OpenSans Bold';
            src: url('{{ asset("fonts/OpenSans-Bold.ttf") }}') format('truetype');
            font-weight: bold;
            font-style: normal;
        }
        * {
            font-family: 'OpenSans Bold', sans-serif !important;
            letter-spacing: initial !important;
        }


        html {
            margin: 0px;
            padding: 0px;
            /* margin-top: 50px; */
        }

        table {
            border-collapse: collapse;
        }

        hr {
            color: rgba(0, 0, 0, 0.2);
            border: 0.5px solid #EAF1FB;
        }

        /* -- Header -- */

        .header-container {
            margin-top: -30px;
            width: 100%;
            padding: 0px 30px;
        }

        .header-logo {

            text-transform: capitalize;
            color: #817AE3;
            padding-top: 0px;
        }

        .company-address-container {
            width: 50%;
            margin-bottom: 2px;
            padding-right: 60px;
        }

        .company-address {
            margin-top: 12px;
            font-size: 12px;
            line-height: 15px;
            color: #595959;
            word-wrap: break-word;
        }

        /* -- Content Wrapper  */

        .content-wrapper {
            display: block;
            padding-top: 0px;
            padding-bottom: 20px;
        }

        .customer-address-container {
            display: block;
            float: left;
            width: 45%;
            padding: 10px 0 0 30px;
        }

        /* -- Shipping -- */
        .shipping-address-container {
            float: right;
            display: block;
        }

        .shipping-address-container--left {
            float: left;
            display: block;
            padding-left: 0;
        }

        .shipping-address {
            font-size: 10px;
            line-height: 15px;
            color: #595959;
            margin-top: 5px;
            width: 160px;
            word-wrap: break-word;
        }

        /* -- Billing -- */



        /*  -- Estimate Details -- */

        .invoice-details-container {
            display: block;
            float: right;
            padding: 10px 30px 0 0;
        }

        .attribute-label {
            font-size: 12px;
            line-height: 18px;
            text-align: left;
            color: #55547A
        }

        .attribute-value {
            font-size: 12px;
            line-height: 18px;
            text-align: right;
        }

        /* -- Items Table -- */

        .items-table {
            margin-top: 35px;
            padding: 0 70px;
            page-break-before: avoid;
            page-break-after: auto;
        }

        

        .items-table hr {
            height: 0.1px;
        }

        .item-table-heading {
            font-size: 14;
            text-align: center;
            color: rgba(0, 0, 0, 0.85);
            padding: 5px;
            color: #55547A;
        }

        

        tr.item-table-heading-row th {
            /* border-bottom: 0.620315px solid #E8E8E8; */
            font-size: 14px;
            line-height: 18px;
            padding: 10px;
        }

        tr.item-row td {
            font-size: 14px;
            line-height: 18px;
            padding: 10px;
        }

        .item-cell {
            font-size: 13;
            text-align: center;
            padding: 5px;
            padding-top: 10px;
            color: #040405;
            vertical-align: center;
        }

        .item-description {
            color: #595959;
            font-size: 14px;
            line-height: 12px;
            padding-left: 10px;
        }

        .item-cell-table-hr {
            margin: 0 30px 0 30px;
        }

        /* -- Total Display Table -- */

        .total-display-container {
            padding: 0 25px;
        }


        .total-display-table {
            border-top: none;
            page-break-inside: avoid;
            page-break-before: auto;
            page-break-after: auto;
            margin-top: 20px;
            float: right;
            width: auto;
        }

        .total-table-attribute-label {
            font-size: 12px;
            color: #55547A;
            text-align: left;
            padding-left: 10px;
        }

        .total-table-attribute-value {
            font-weight: bold;
            text-align: right;
            font-size: 12px;
            color: #040405;
            padding-right: 10px;
            padding-top: 2px;
            padding-bottom: 2px;
        }

        .total-border-left {
            border: 1px solid #E8E8E8 !important;
            border-right: 0px !important;
            padding-top: 0px;
            padding: 8px !important;
        }

        .total-border-right {
            border: 1px solid #E8E8E8 !important;
            border-left: 0px !important;
            padding-top: 0px;
            padding: 8px !important;
        }

        /* -- Notes -- */
        .notes {
            font-size: 12px;
            color: #595959;
            margin-top: 15px;
            margin-left: 30px;
            width: 442px;
            text-align: left;
            page-break-inside: avoid;
        }

        .notes-label {
            font-size: 15px;
            line-height: 22px;
            letter-spacing: 0.05em;
            color: #040405;
            width: 108px;
            white-space: nowrap;
            height: 19.87px;
            padding-bottom: 10px;
        }

        /* -- Helpers -- */

        .text-primary {
            color: #5851DB;
        }

        .text-center {
            text-align: center
        }

        table .text-left {
            text-align: left;
        }

        table .text-right {
            text-align: right;
        }

        .border-0 {
            border: none;
        }

        .py-2 {
            padding-top: 2px;
            padding-bottom: 2px;
        }

        .py-8 {
            padding-top: 8px;
            padding-bottom: 8px;
        }

        .py-3 {
            padding: 3px 0;
        }

        .pr-20 {
            padding-right: 20px;
        }

        .pr-10 {
            padding-right: 10px;
        }

        .pl-20 {
            padding-left: 20px;
        }

        .pl-10 {
            padding-left: 10px;
        }

        .pl-0 {
            padding-left: 0;
        }

        /* ------------------ */
        .h1 {
            font-size: 36px;
            color: black;
            font-weight: bold;
        }
        .h2 {
            font-size: 14px;
            margin-bottom: 5px;
            text-transform: uppercase;
            color: #6768f5;
            font-weight: 700;
        }
        p {
            margin-top: 0px ;
            margin-bottom: 5px;
            font-size: 14px;
            color: black;
        }



    </style>

    @if (App::isLocale('th'))
        @include('app.pdf.locale.th')
    @endif
</head>

<body>
    <!-- Coloured line -->
    <div style="
        width: 100%;
        height: 20px;
        margin-bottom: 80px;
    ">
        <img style="width: 100%; height: 100%; object-fit: cover;" src="{{ public_path('img/gradientBar.jpg') }}">
    </div>

    <!-- Header -->
    <div style="
        width: 100%;
        margin-bottom: 120px;
    ">
        <table width="100%" style="color: black; padding: 0 80px; ">
            <tr>
                <td style="width: 50%; vertical-align: top; border: none;">
                    <p class="h1">Invoice</p>
                    <p style="font-size: 18px !important;">{{ $invoice->formattedInvoiceDate }}</p>
                    <h2 style="margin-top: 26px;" class="h2">Bill To</h2>
                    
                    <div class="">
                    <p>@if ($billing_address)
                        {!! $billing_address !!}
                        <!-- show first part of address -->
                    @endif
                    </p>
                    </div>
                </td>
                <td style="width: 60px; text-align: right; vertical-align: top; border: none;">
                    <!-- Logo -->
                    <img class="header-logo" style="margin: 10px 0 20px 0; height: auto; max-width: 180px; object-fit: contain;" src="{{ $logo }}" alt="Company Logo">
                    
                    <!-- mediahost details -->
                     <div style="text-align: left;">
                     <p style="padding-bottom: 14px">
                        {{ $invoice->customer->company->address->address_street_1 }}
                        @if($invoice->customer->company->address->address_street_2)
                            {{ $invoice->customer->company->address->address_street_2 }}
                        @endif<br/>
                        {{ $invoice->customer->company->address->city }}, {{ $invoice->customer->company->address->zip }}</p>
                        
                        <p>
                        @if($invoice->customer->company->address->phone)
                            {{ $invoice->customer->company->address->phone }}<br/>
                            @endif
                            admin@mediahost.nz
                        </p>
                    </div>

                </td>
            </tr>
        </table>
    </div>







    <div class="content-wrapper">


        @include('app.pdf.invoice.partials.table-custom')

        <div class="notes">
            @if ($notes)
                <div class="notes-label">
                    @lang('pdf_notes')
                </div>

                {!! $notes !!}
            @endif
        </div>

        <div style="
            position: fixed;
            bottom: 0;
            width: 100%;
        ">
            <table width="100%" style="border-collapse: collapse;">
                <tr>
                    <td style="background: #ededf2; padding: 30px 30px 30px 80px; color: black; width: 50%;">
                        <div style="margin-bottom: 20px; font-size: 18px !important;">
                            <h2 class="h2" style="font-size: 18px;">Invoice #</h2>
                            <p style="font-size: 16px;">{{ $invoice->invoice_number }}</p>
                        </div>

                        <h2 class="h2" style="font-size: 18px;">Bank Acc</h2>
                        <p style="font-size: 16px;">02-0888-0017031-009</p>

                    </td>
                    <td style="background-color: #6768f5; padding: 30px 80px 30px 30px; width: 50%; text-align: right;">
                        <p class="h2" style="color: white; margin-top: 15px;">Total</p>
                        <p class="h1" style="color: white;">
                            {!! format_money_pdf($invoice->total, $invoice->customer->currency)!!}
                        </p>
                    </td>
                </tr>
            </table>
        </div>

    </div>
</body>

</html>
