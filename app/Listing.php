<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Listing extends Model
{
    protected $fillable = [
        'name',
    ];

    protected $with = [
        'items',
    ];

    public function items()
    {
        return $this->hasMany(Item::class);
    }

    public function item($id)
    {
        return $this->items()->where('id', $id)->firstOrFail();
    }

    public function owner()
    {
        return $this->belongsTo(User::class);
    }
}
