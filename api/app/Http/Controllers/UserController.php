<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function index() {

        $users = DB::table('users')->get();
        //return $users;

        return response()->json(["Dados" => $users], 200);
    }
}
