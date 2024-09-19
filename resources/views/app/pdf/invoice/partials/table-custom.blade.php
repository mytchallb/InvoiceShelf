
<style>
    table td {
        border-bottom: 1px solid #e3e3e3;
    }
</style>


<table width="100%" class="items-table" cellspacing="0" border="0">
    <tr class="item-table-heading-row">
        <th width="40%" class="pl-0 text-left h2 item-table-heading">@lang('pdf_items_label')</th>
        @foreach($customFields as $field)
            <th class="text-right h2 item-table-heading">{{ $field->label }}</th>
        @endforeach
        <th class="pr-20 text-right h2 item-table-heading">QTY</th>
        <th class="pr-20 text-right h2 item-table-heading">@lang('pdf_price_label')</th>
        @if($invoice->discount_per_item === 'YES')
        <th class="pl-10 text-right h2 item-table-heading">@lang('pdf_discount_label')</th>
        @endif
        @if($invoice->tax_per_item === 'YES')
        <th class="pl-10 text-right h2 item-table-heading">@lang('pdf_tax_label')</th>
        @endif
        <th class="text-right h2 item-table-heading">@lang('pdf_amount_label')</th>
    </tr>
    @php
        $index = 1
    @endphp
    @foreach ($invoice->items as $item)
        <tr class="item-row">
            <td
                class="pl-0 text-left item-cell"
                style="vertical-align: middle;"
            >
                <span>{{ $item->name }}</span><br>
                <span class="item-description">{!! nl2br(htmlspecialchars($item->description)) !!}</span>
            </td>
            @foreach($customFields as $field)
                <td class="text-right item-cell" style="vertical-align: middle;">
                    {{ $item->getCustomFieldValueBySlug($field->slug) }}
                </td>
            @endforeach
            <td
                class="pr-20 text-right item-cell"
                style="vertical-align: middle;"
            >
                {{$item->quantity}} @if($item->unit_name) {{$item->unit_name}} @endif
            </td>
            <td
                class="pr-20 text-right item-cell"
                style="vertical-align: middle;"
            >
                {!! format_money_pdf($item->price, $invoice->customer->currency) !!}
            </td>

            @if($invoice->discount_per_item === 'YES')
                <td
                    class="pl-10 text-right item-cell"
                    style="vertical-align: middle;"
                >
                    @if($item->discount_type === 'fixed')
                            {!! format_money_pdf($item->discount_val, $invoice->customer->currency) !!}
                        @endif
                        @if($item->discount_type === 'percentage')
                            {{$item->discount}}%
                        @endif
                </td>
            @endif

            @if($invoice->tax_per_item === 'YES')
                <td
                    class="pl-10 text-right item-cell"
                    style="vertical-align: middle;"
                >
                    {!! format_money_pdf($item->tax, $invoice->customer->currency) !!}
                </td>
            @endif

            <td
                class="text-right item-cell"
                style="vertical-align: middle;"
            >
                {!! format_money_pdf($item->total, $invoice->customer->currency) !!}
            </td>
        </tr>
        @php
            $index += 1
        @endphp
    @endforeach

    
</table>

<!-- <hr class="item-cell-table-hr"> -->

<div class="total-display-container">
    <table width="100%" cellspacing="0px" border="0" class="total-display-table @if(count($invoice->items) > 12) page-break @endif">
        <!-- Subtotal -->
        <!-- <tr>
            <td class="border-0 total-table-attribute-label">@lang('pdf_subtotal')</td>
            <td class="py-2 border-0 item-cell total-table-attribute-value">
                {!! format_money_pdf($invoice->sub_total, $invoice->customer->currency) !!}
            </td>
        </tr> -->

        <!-- Discount -->
        @if($invoice->discount > 0)
            @if ($invoice->discount_per_item === 'NO')
                <tr style="background: #6768f5; transform: translateX(-42px);">
                    <td class="border-0 total-table-attribute-label" style="text-align: right; font-size: 16px; color: white; padding: 7px 14px; border-radius: 10px;" >
                        @if($invoice->discount_type === 'fixed')
                            @lang('pdf_discount_label')
                        @endif
                        @if($invoice->discount_type === 'percentage')
                            @lang('pdf_discount_label') of {{$invoice->discount}}%
                        @endif
                        <span style="margin-left: 20px;">-</span>
                        @if($invoice->discount_type === 'fixed')
                            {!! format_money_pdf($invoice->discount_val, $invoice->customer->currency) !!}
                        @endif
                        @if($invoice->discount_type === 'percentage')
                            {!! format_money_pdf($invoice->discount_val, $invoice->customer->currency) !!}
                        @endif
                    </td>
                </tr>
            @endif
        @endif

        @if ($invoice->tax_per_item === 'YES')
            @foreach ($taxes as $tax)
                <tr>
                    <td class="border-0 total-table-attribute-label">
                        {{$tax->name.' ('.$tax->percent.'%)'}}
                    </td>
                    <td class="py-2 border-0 item-cell total-table-attribute-value">
                        {!! format_money_pdf($tax->amount, $invoice->customer->currency) !!}
                    </td>
                </tr>
            @endforeach
        @else
            @foreach ($invoice->taxes as $tax)
                <tr>
                    <td class="border-0 total-table-attribute-label">
                        {{$tax->name.' ('.$tax->percent.'%)'}}
                    </td>
                    <td class="py-2 border-0 item-cell total-table-attribute-value">
                        {!! format_money_pdf($tax->amount, $invoice->customer->currency) !!}
                    </td>
                </tr>
            @endforeach
        @endif

        <!-- Totals -->
        <!-- <tr>
            <td class="py-3"></td>
            <td class="py-3"></td>
        </tr>
        <tr>
            <td class="border-0 total-border-left total-table-attribute-label">
                @lang('pdf_total')
            </td>
            <td
                class="py-8 border-0 total-border-right item-cell total-table-attribute-value"
                style="color: #5851D8"
            >
                {!! format_money_pdf($invoice->total, $invoice->customer->currency)!!}
            </td>
        </tr> -->
    </table>
</div>
