<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Auth;
use App\Models\User;


class UserController extends Controller
{
    //
    public function register(Request $request){
        $fields = $request->validate([
            'username' => 'required|string|unique:users,username',
            'email' => 'required|string|unique:users,email',
            'password' => 'required|string|confirmed',
        ]);

        $user = User::create([
            'username' => $fields['username'],
            'email' => $fields['email'],
            'password' => Hash::make($fields['password'])
        ]);


        $token = $user->createToken('my-app-token')->plainTextToken;

        $response = [
            'token' => $token,
            'user' => $user
        ];

        return response($response, 201); 
    }



    public function login(Request $request)
    {
        $user= User::where('email', $request->email)->first();
        // print_r($data);
            if (!$user || !Hash::check($request->password, $user->password)) {
                return response([
                    'message' => ['These credentials do not match our records.']
                ], 404);
            }
        
             $token = $user->createToken('my-app-token')->plainTextToken;
        
            $response = [
                'user' => $user,
                'token' => $token
            ];
        
             return response($response, 201);
    }

    public function logout(request $request) {
        auth()->user()->tokens()->delete();
        return [
            'message' => 'Logged out'
        ];
    }


    // public function update(Request $request){
    //         $this->validate($request, [
    //             'username' => 'required',
    //             'current_password' => 'required|string',
    //             'new_password' => 'required|confirmed|string'
    //         ]);

    //         $user= User::where('username', $request->username)->first();

    //         if (!$user || !Hash::check($request->password, $user->password)) 
    //     {
    //         return back()->with('error', "Current Password is Invalid");
    //     }
    //     $user->password =  Hash::make($request->new_password);
    //     $user->save();
    //     return back()->with('success', "Password Changed Successfully");
    // }

    public function update(Request $request)
{
    $this->validate($request, [
        'username' => 'required',
        'current_password' => 'required|string',
        'new_password' => 'required|confirmed|string'
    ]);

    $user = Auth::user();

    if (!Hash::check($request->current_password, $user->password)) {
        return response(['error' => 'Current password is invalid'], 401);
    }

    $user->password = Hash::make($request->new_password);
    $user->save();

    $response = [
        'message' => 'Password changed successfully',
        'user' => $user
    ];

    return response($response, 200);
}


}
