<?php

namespace App\Http\Controllers;

use App\Exports\PayrollExport;
use App\Models\Payroll;
use Illuminate\Http\Request;
use Carbon\Carbon;
use Illuminate\Support\Facades\Response;
use Inertia\Inertia;
use Maatwebsite\Excel\Excel;

class PayrollController extends Controller
{
    public function index()
    {
        $payrolls = Payroll::orderBy('end_date', 'desc')
            ->paginate(10);

        return Inertia::render('dashboard/payrolls/index', [
            'payrolls' => $payrolls,
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'start_date' => [
                'required',
                'date',
            ],
            'end_date' => [
                'required',
                'date',
                'after_or_equal:start_date',
            ],
        ]);

        $payroll = Payroll::create($validated);

        return to_route('payrolls.index');
    }

    public function destroy(Payroll $payroll)
    {
        $payroll->delete();

        return to_route('payrolls.index');
    }

    public function export(Payroll $payroll)
    {
        $startDate = Carbon::parse($payroll->start_date)->format('Y-m-d');
        $endDate = Carbon::parse($payroll->end_date)->format('Y-m-d');

        $fileName = 'payroll_' . $startDate . '_to_' . $endDate . '.xlsx';

        return Excel::download(new PayrollExport($payroll->start_date, $payroll->end_date), $fileName);
    }
}
