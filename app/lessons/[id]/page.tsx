'use client';

import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { lessons } from '../../../data/lessons'; // Adjust path as needed
import Header from '@/app/components/Header';

export default function LessonDetail() {
    const params = useParams();
    const router = useRouter();
    const lessonId = Number(params.id);

    // Find the lesson by id
    const lesson = lessons.find(l => l.id === lessonId);

    if (!lesson) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
                <h2 className="text-2xl font-bold mb-4">Lesson Not Found</h2>
                <Link href="/lessons">
                    <button className="bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg font-medium">
                        Back to Lessons
                    </button>
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
            {/* Header */}
            <header className="bg-white dark:bg-gray-800 shadow-sm">
                <Header />
            </header>

            <main className="max-w-4xl mx-auto px-4 py-10 space-y-6">
                <h1 className="text-4xl font-bold">{lesson.title}</h1>
                <h2 className='text-2xl font-semibold text-amber-600 dark:text-amber-400 mb-4'>{lesson.description}</h2>
                <p className="text-gray-900 dark:text-gray-200 text-lg whitespace-pre-line">{lesson.content}</p>

                {/* TODO: Add examples, exercises, audio, images here */}
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
