<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FeesMaster extends Model
{
    use HasFactory;
    protected $table    = "master_fees";
    protected $fillable = ['id', 'visitType', 'betweenKm', 'amount', 'status', 'isDeleted'];
}
