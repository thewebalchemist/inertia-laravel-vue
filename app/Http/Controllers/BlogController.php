<?php

namespace App\Http\Controllers;

use App\Models\Blog;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session; // Import the Session facade
use Inertia\Inertia;

class BlogController extends Controller
{
    public function create()
    {
        return Inertia::render('Blogs/Create');
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required',
            'content' => 'required',
            'category' => 'required|in:Investing 101,Wealth Building,Market Insights,Ethical Investing,Retirement Planning,Risk Management,Financial Consulting,Alternative Investments,Tax Strategies,Regulatory Compliance',
        ]);

        $blog = Blog::create($validatedData);

        return redirect()->route('blog.show', ['id' => $blog->id]);
    }

    public function show($id)
    {
        $blog = Blog::findOrFail($id);

        return Inertia::render('Blogs/Show', ['blog' => $blog]);
    }

    public function edit($id)
    {
        $blog = Blog::findOrFail($id);

        return Inertia::render('Blogs/Edit', ['blog' => $blog]);
    }

    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'title' => 'required',
            'content' => 'required',

        ]);

        $blog = Blog::findOrFail($id);
        $blog->update($validatedData);

        return redirect()->route('blog.show', ['id' => $blog->id]);
    }

    public function index(Request $request)
    {
        // Get the user's preferred active tab from the session, or set a default value
        $activeTab = Session::get('active_tab', 0);

        $blogs = Blog::all();

        // Pass the activeTab to the view
        return Inertia::render('Blogs/Index', [
            'blogs' => $blogs,
            'activeTab' => $activeTab,
        ]);
    }
}
