<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Article;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ArticleController extends Controller
{
    
    public function index()
    {
        return response()->json(
            Article::latest()->paginate(10)
        );
    }

    public function show($id)
    {
        return Article::findOrFail($id);
    }

    
    public function store(Request $request)
    {
        $data = $request->validate([
            'title' => 'required',
            'excerpt' => 'required',
            'content' => 'required',
            'author' => 'required',
            'published_date' => 'required|date',
            'url' => 'required|unique:articles',
            'is_enhanced' => 'boolean',
            'parent_article_id' => 'nullable'
        ]);

        $data['slug'] = Str::slug($data['title']);

        return Article::create($data);
    }

  
    public function latest()
    {
        return Article::where('is_enhanced', false)
            ->latest()
            ->first();
    }
}
