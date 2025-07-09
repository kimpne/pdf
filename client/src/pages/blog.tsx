import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Calendar, ArrowRight, Clock } from "lucide-react";
import { Link } from "wouter";
import MultiLangSEOHead from "@/components/layout/multi-lang-seo-head";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  publishDate: string;
  readTime: string;
  category: string;
  tags: string[];
  slug: string;
  author: string;
  seoTitle: string;
  metaDescription: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "How to Merge PDF Files Online: Complete Guide for 2025",
    excerpt: "Learn the easiest and most secure ways to combine multiple PDF documents into a single file using online tools. This comprehensive guide covers best practices, security considerations, and step-by-step instructions.",
    publishDate: "2025-01-09",
    readTime: "5 min read",
    category: "PDF Tools",
    tags: ["PDF Merge", "Online Tools", "Document Management"],
    slug: "how-to-merge-pdf-files-online",
    author: "PDF Tools Team",
    seoTitle: "How to Merge PDF Files Online - Complete Guide 2025 | PDF Tools",
    metaDescription: "Learn how to merge PDF files online safely and efficiently. Step-by-step guide with security tips and best practices for combining PDF documents in 2025."
  },
  {
    id: "2",
    title: "Best Free PDF Tools for 2025: Complete Review and Guide",
    excerpt: "Discover the top free PDF tools available in 2025, including features, security, and performance comparisons. Find the perfect PDF solution for your needs without breaking the bank.",
    publishDate: "2025-01-08",
    readTime: "7 min read",
    category: "Reviews",
    tags: ["PDF Tools", "Free Software", "Review", "Comparison"],
    slug: "best-free-pdf-tools-2025",
    author: "PDF Tools Team",
    seoTitle: "Best Free PDF Tools for 2025 - Complete Review & Comparison | PDF Tools",
    metaDescription: "Discover the top free PDF tools for 2025. Compare features, security, and performance of the best online PDF editors, converters, and compression tools."
  },
  {
    id: "3",
    title: "PDF Compression Techniques Explained: Optimize Your Files",
    excerpt: "Understanding how PDF compression works and when to use different compression methods for optimal results. Learn advanced techniques to reduce file sizes without losing quality.",
    publishDate: "2025-01-07",
    readTime: "8 min read",
    category: "Technical",
    tags: ["PDF Compression", "File Optimization", "Technical Guide"],
    slug: "pdf-compression-techniques-explained",
    author: "PDF Tools Team",
    seoTitle: "PDF Compression Techniques Explained - Optimize Files Without Quality Loss | PDF Tools",
    metaDescription: "Learn advanced PDF compression techniques to reduce file sizes while maintaining quality. Complete guide to lossless and lossy compression methods for 2025."
  },
  {
    id: "4",
    title: "How to Convert PDF to Word Safely: Security Guide",
    excerpt: "Step-by-step guide to converting PDF documents to Word format while maintaining security and formatting integrity. Protect your sensitive documents during conversion.",
    publishDate: "2025-01-06",
    readTime: "9 min read",
    category: "Security",
    tags: ["PDF Conversion", "Security", "Word Documents", "Data Protection"],
    slug: "how-to-convert-pdf-to-word-safely",
    author: "PDF Tools Team",
    seoTitle: "How to Convert PDF to Word Safely - Security Guide 2025 | PDF Tools",
    metaDescription: "Learn how to convert PDF to Word safely with our comprehensive security guide. Protect sensitive data while maintaining formatting integrity in 2025."
  },
  {
    id: "5",
    title: "Why Security Matters When Using Online PDF Tools",
    excerpt: "Understanding the security implications of online PDF tools and how to protect your sensitive documents. Essential security practices for safe PDF processing.",
    publishDate: "2025-01-05",
    readTime: "10 min read",
    category: "Security",
    tags: ["PDF Security", "Data Protection", "Privacy", "Online Tools"],
    slug: "why-security-matters-online-pdf-tools",
    author: "PDF Tools Team",
    seoTitle: "Why Security Matters When Using Online PDF Tools - Complete Guide 2025 | PDF Tools",
    metaDescription: "Understand the security risks of online PDF tools and learn how to protect your sensitive documents. Essential security guide for safe PDF processing in 2025."
  },
  {
    id: "6",
    title: "Tips for Splitting Large PDF Files Easily",
    excerpt: "Learn efficient methods to split large PDF files into manageable sections without losing quality or formatting. Complete guide with tools and best practices.",
    publishDate: "2025-01-04",
    readTime: "8 min read",
    category: "How-To",
    tags: ["PDF Splitting", "Document Management", "File Organization"],
    slug: "tips-splitting-large-pdf-files",
    author: "PDF Tools Team",
    seoTitle: "Tips for Splitting Large PDF Files Easily - Complete Guide 2025 | PDF Tools",
    metaDescription: "Learn efficient methods to split large PDF files into manageable sections. Complete guide with tools, techniques, and best practices for PDF splitting in 2025."
  },
  {
    id: "7",
    title: "How to Convert Images to PDF Quickly",
    excerpt: "Fast and efficient methods to convert various image formats to PDF documents with quality preservation. Perfect for creating professional portfolios and presentations.",
    publishDate: "2025-01-03",
    readTime: "7 min read",
    category: "How-To",
    tags: ["Image Conversion", "PDF Creation", "Document Processing"],
    slug: "how-to-convert-images-to-pdf-quickly",
    author: "PDF Tools Team",
    seoTitle: "How to Convert Images to PDF Quickly - Complete Guide 2025 | PDF Tools",
    metaDescription: "Learn fast and efficient methods to convert images to PDF format. Complete guide with tools, techniques, and optimization tips for image-to-PDF conversion in 2025."
  },
  {
    id: "8",
    title: "Common Mistakes to Avoid When Editing PDF Files",
    excerpt: "Learn about the most frequent PDF editing errors and how to avoid them for better document quality and workflow efficiency. Essential guide for professionals.",
    publishDate: "2025-01-02",
    readTime: "9 min read",
    category: "Best Practices",
    tags: ["PDF Editing", "Document Quality", "Best Practices", "Workflow"],
    slug: "common-mistakes-avoid-editing-pdf-files",
    author: "PDF Tools Team",
    seoTitle: "Common Mistakes to Avoid When Editing PDF Files - Essential Guide 2025 | PDF Tools",
    metaDescription: "Learn about the most frequent PDF editing errors and how to avoid them. Essential guide to maintaining document quality and workflow efficiency in 2025."
  },
  {
    id: "9",
    title: "Top 5 PDF Tools for Students and Professionals",
    excerpt: "Discover the best PDF tools designed for academic and professional use, with features comparison and recommendations for different needs and budgets.",
    publishDate: "2025-01-01",
    readTime: "10 min read",
    category: "Reviews",
    tags: ["PDF Tools", "Students", "Professionals", "Productivity", "Software Review"],
    slug: "top-5-pdf-tools-students-professionals",
    author: "PDF Tools Team",
    seoTitle: "Top 5 PDF Tools for Students and Professionals - Complete Guide 2025 | PDF Tools",
    metaDescription: "Discover the best PDF tools for students and professionals in 2025. Compare features, pricing, and benefits to choose the perfect PDF editor for your needs."
  },
  {
    id: "10",
    title: "The Future of Online PDF Editors: Trends to Watch",
    excerpt: "Explore emerging trends and technologies shaping the future of online PDF editing tools and document management. AI, collaboration, and more.",
    publishDate: "2024-12-31",
    readTime: "12 min read",
    category: "Future Tech",
    tags: ["Future Trends", "PDF Technology", "AI", "Collaboration", "Innovation"],
    slug: "future-online-pdf-editors-trends",
    author: "PDF Tools Team",
    seoTitle: "The Future of Online PDF Editors: Trends to Watch 2025 | PDF Tools",
    metaDescription: "Explore emerging trends in online PDF editing technology. Discover AI integration, enhanced collaboration, and future innovations shaping PDF tools in 2025."
  }
];

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...Array.from(new Set(blogPosts.map(post => post.category)))];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-slate-50">
      <MultiLangSEOHead
        title="PDF Tools Blog - Tips, Guides & Latest Updates"
        description="Discover expert tips, comprehensive guides, and latest updates on PDF tools. Learn how to merge, split, compress, and convert PDF files efficiently."
        keywords="PDF blog, PDF tips, PDF guides, PDF tools updates, document management, PDF tutorials"
        canonical="/blog"
        ogType="website"
        siteName="PDF Tools"
        structuredDataType="WebSite"
      />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            PDF Tools Blog
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto">
            Expert tips, comprehensive guides, and latest updates on PDF tools and document management
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <Input
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="whitespace-nowrap"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <Card key={post.id} className="flex flex-col hover:shadow-lg transition-shadow">
              <CardHeader className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{post.category}</Badge>
                  <div className="flex items-center text-sm text-slate-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <CardTitle className="text-xl mb-2 line-clamp-2">{post.title}</CardTitle>
                <CardDescription className="text-slate-600 line-clamp-3 flex-1">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-1 mb-4">
                  {post.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-slate-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(post.publishDate).toLocaleDateString()}
                  </div>
                  <Link href={`/blog/${post.slug}`}>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-500 text-lg">No articles found matching your search.</p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
              }}
              className="mt-4"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}