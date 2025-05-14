<?php

namespace App\Enums;

enum UserRoles : string
{
    case ADMIN = "admin";
    case CUSTOMER = "customer";
    case BRANCH = "branch";

    public function label(){
        return match($this) {
            self::ADMIN => "admin",
            self::CUSTOMER => "customer",
            self::BRANCH => "branch",
        };
    }
}