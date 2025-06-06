<?php

namespace App\Enums;

enum WorkoutSessionsType : string
{
    case FITNESS = "fitness";
    case Cardio = "cardio";
    case CROSSFIT = "croosfit";

    public function label(){
        return match($this) {
            self::FITNESS => "fitness",
            self::Cardio => "cardio",
            self::CROSSFIT => "croosfit",
        };
    }

    
}