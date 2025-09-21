import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { type FormEvent } from "react";
import { useState } from "react";
import { toast } from "sonner";
import { Search, Github, User } from "lucide-react";

type SearchFormProps = {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
};

const SearchForm = ({ userName, setUserName }: SearchFormProps) => {
  const [text, setText] = useState(userName);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedText = text.trim();

    if (trimmedText === "") {
      toast.error("Please enter a GitHub username", {
        description: "Username cannot be empty",
        duration: 3000,
      });
      return;
    }

    if (trimmedText === userName) {
      toast.info("Already showing results for this user", {
        duration: 2000,
      });
      return;
    }

    setIsSearching(true);

    try {
      setUserName(trimmedText);
      toast.success(`Searching for ${trimmedText}...`, {
        duration: 2000,
      });
    } catch (error) {
      toast.error("Search failed", {
        description: "Please try again",
      });
    } finally {
      setIsSearching(false);
    }
  };

  const handleClear = () => {
    setText("");
  };

  return (
    <div className="w-full max-w-2xl mx-auto mb-12">
      {/* Header Section */}
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-2 mb-3">
          <Github className="h-8 w-8 text-primary" />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            GitHub User Finder
          </h1>
        </div>
        <p className="text-muted-foreground text-lg">
          Discover and explore GitHub profiles with detailed insights
        </p>
      </div>

      {/* Search Form */}
      <form onSubmit={handleSearch} className="space-y-4">
        <div className="relative">
          <Label htmlFor="search" className="sr-only">
            Search GitHub User
          </Label>

          {/* Search Input with Icon */}
          <div className="relative">
            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              id="search"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter GitHub username (e.g., octocat)"
              className="pl-10 pr-20 h-12 text-lg border-2 focus:border-primary transition-colors"
              disabled={isSearching}
            />

            {/* Clear Button */}
            {text && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={handleClear}
                className="absolute right-16 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 hover:bg-destructive/10 hover:text-destructive"
              >
                ×
              </Button>
            )}
          </div>
        </div>

        {/* Search Button */}
        <Button
          type="submit"
          className="w-full h-12 text-lg font-semibold"
          disabled={isSearching || !text.trim()}
        >
          {isSearching ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2" />
              Searching...
            </>
          ) : (
            <>
              <Search className="h-4 w-4 mr-2" />
              Search GitHub User
            </>
          )}
        </Button>

        {/* Quick Search Suggestions */}
        <div className="flex flex-wrap gap-2 justify-center pt-2">
          <span className="text-sm text-muted-foreground">Try:</span>
          {["octocat", "torvalds", "gaearon", "kentcdodds"].map(
            (suggestion) => (
              <Button
                key={suggestion}
                type="button"
                variant="outline"
                size="sm"
                onClick={() => setText(suggestion)}
                className="h-8 text-xs"
                disabled={isSearching}
              >
                {suggestion}
              </Button>
            )
          )}
        </div>
      </form>

      {/* Current Search Indicator */}
      {userName && (
        <div className="mt-6 p-4 bg-muted/50 rounded-lg border">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <User className="h-4 w-4" />
            <span>Currently viewing:</span>
            <span className="font-semibold text-foreground">{userName}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchForm;
