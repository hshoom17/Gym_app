<?php

namespace App\Enums;

enum UserRoles : string
{
    case ADMIN = "admin";
    case CUSTOMER = "customer";
    case COACH = "coach";

    public function label(){
        return match($this) {
            self::ADMIN => "admin",
            self::CUSTOMER => "customer",
            self::COACH => "coach",
        };
    }

}