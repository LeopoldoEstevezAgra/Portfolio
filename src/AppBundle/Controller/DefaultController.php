<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

use AppBundle\Entity\Project;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     */
    public function indexAction(Request $request)
    {

        $projectRepository = $this->getDoctrine()->getRepository(Project::class);

        $projects = $projectRepository->findAll();

        return $this->render('public/index.html.twig', [
            "projects" => $projects
        ]);
    }
}
