'use client';

import { lessons, Lesson } from '../../data/lessons'; // adjust path if needed
import Link from 'next/link';
import Header from '../components/Header';

export default function Lessons() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
            {/* Header */}
            <header className="bg-white dark:bg-gray-800 shadow-sm">
                <Header hideNavLinks={true}/>
            </header>

            <main className="max-w-4xl mx-auto px-4 py-10 space-y-8">
                <h2 className="text-4xl font-bold mb-6 text-center">Lessons</h2>

                {lessons.map((lesson, index) => (
                    <div key={lesson.id} className="p-4 border rounded-lg shadow-sm">
                        <h3 className="text-xl font-semibold mb-2">
                            {index + 1}. {lesson.title}
                        </h3>
                        <p className="text-gray-900 dark:text-gray-200">{lesson.description}</p>
                        <Link href={`/lessons/${lesson.id}`}>
                            <button className="mt-4 bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg font-medium">
                                Start Lesson
                            </button>
                        </Link>
                    </div>
                ))}
            </main>

            <footer className="bg-gray-900 text-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                        <p>&copy; 2025 English2Deutsch. Created by Nimash Mendis.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
