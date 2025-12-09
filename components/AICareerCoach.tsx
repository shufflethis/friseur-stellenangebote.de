import React, { useState } from 'react';
import { generateCareerAdvice } from '../services/geminiService';
import { UserRole } from '../types';
import { Sparkles, Send, MessageSquare, Loader2 } from 'lucide-react';

interface AICareerCoachProps {
  initialRole?: UserRole;
}

export const AICareerCoach: React.FC<AICareerCoachProps> = ({ initialRole = UserRole.TALENT }) => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState<UserRole>(initialRole);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    setResponse(null);
    try {
      const result = await generateCareerAdvice(input, role);
      setResponse(result);
    } catch (error) {
      setResponse("Ein Fehler ist aufgetreten.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden my-8">
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 text-white flex items-center justify-between">
        <div>
          <h3 className="text-xl font-serif font-bold flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-gold-400" />
            KI-Karriere-Coach
          </h3>
          <p className="text-sm text-gray-300 mt-1">
            Ihr persönlicher Assistent für Fragen rund um Karriere, Bewerbung & Personal.
          </p>
        </div>
        <div className="hidden md:block">
           <div className="bg-white/10 p-2 rounded-lg">
             <MessageSquare className="h-6 w-6 text-gold-400" />
           </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setRole(UserRole.TALENT)}
            className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
              role === UserRole.TALENT 
                ? 'bg-rose-50 text-rose-600 border border-rose-200' 
                : 'bg-gray-50 text-gray-500 border border-transparent hover:bg-gray-100'
            }`}
          >
            Für Arbeitnehmer
          </button>
          <button
            onClick={() => setRole(UserRole.EMPLOYER)}
            className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
              role === UserRole.EMPLOYER
                ? 'bg-blue-50 text-blue-600 border border-blue-200'
                : 'bg-gray-50 text-gray-500 border border-transparent hover:bg-gray-100'
            }`}
          >
            Für Arbeitgeber
          </button>
        </div>

        <form onSubmit={handleAsk} className="relative">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={role === UserRole.TALENT 
              ? "Fragen Sie z.B.: 'Wie verhandle ich mehr Gehalt?' oder 'Was gehört in mein Portfolio?'" 
              : "Fragen Sie z.B.: 'Schreibe eine Stellenanzeige für einen Top-Stylisten'"}
            className="w-full p-4 pr-12 rounded-lg border border-gray-200 focus:border-gold-500 focus:ring-1 focus:ring-gold-500 min-h-[100px] resize-none text-gray-700"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="absolute bottom-3 right-3 p-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
          </button>
        </form>

        {response && (
          <div className="mt-6 p-6 bg-gray-50 rounded-lg border border-gray-100">
            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-2">Antwort des Coaches</h4>
            <div className="prose prose-sm max-w-none text-gray-700 whitespace-pre-line">
              {response}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};